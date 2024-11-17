import { useState } from 'react';
import { useAppDispatch } from '../../../shared/store';
import { onDelete, onAddNew, onEdit } from '../../../shared/store/companiesSlice';
import { useDebouncedCallback } from '../../../shared/lib';

const useTableCompanies = () => {
  const dispatch = useAppDispatch();
  const [isSelectedAll, setIsSelectedAll] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const onScrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const onSelectedAll = () => {
    setIsSelectedAll((prevState) => !prevState);

    if (selectedIds.length) {
      setSelectedIds([]);
    }
  };

  const onSelectedCompany = (companyId: string) => {
    const isHasId = selectedIds.includes(companyId);

    if (isHasId) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== companyId));
    } else {
      setSelectedIds((prevState) => [...prevState, companyId]);
    }
  };

  const onDeleteCompany = () => {
    dispatch(onDelete({ ids: selectedIds, isDeleteAll: isSelectedAll }));
  };

  const onAddCompany = () => {
    dispatch(onAddNew());
    onScrollToBottom();
  };

  const onEditCompany = useDebouncedCallback(
    (id: string, key: string, value: string) => dispatch(onEdit({ id, key, value })),
    200
  );

  return { isSelectedAll, selectedIds, onSelectedAll, onSelectedCompany, onDeleteCompany, onAddCompany, onEditCompany };
};

export default useTableCompanies;
