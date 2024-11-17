import { HTMLAttributes } from 'react';
import { CompanyType } from '../../../../../entities/companies';
import styles from './Row.module.scss';
import { Checkbox, Input } from '../../../../../shared/ui';

interface RowProps extends HTMLAttributes<HTMLTableRowElement> {
  company: CompanyType;
  isSelected: boolean;
  onEditCompany: (id: string, key: string, value: string) => void;
  onSelectedCompany: (id: string) => void;
}

export const Row = ({ company, isSelected, onEditCompany, onSelectedCompany }: RowProps) => {
  return (
    <tr className={isSelected ? styles.selected : ''}>
      <td>
        <Checkbox onChange={() => onSelectedCompany(company.id)} isCheckedDefault={isSelected} />
      </td>
      <td>
        <Input initialValue={company.name} onChange={(e) => onEditCompany(company.id, 'name', e.target.value)} />
      </td>
      <td>
        <Input initialValue={company.address} onChange={(e) => onEditCompany(company.id, 'address', e.target.value)} />
      </td>
    </tr>
  );
};
