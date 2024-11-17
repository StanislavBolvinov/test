import styles from './Table.module.scss';
import { Button, Checkbox } from '../../../../shared/ui';
import useTableCompanies from '../../lib/useTableCompanies';
import { useReduxSelector } from '../../../../shared/store';
import { HTMLAttributes } from 'react';
import { Row } from './Row';

export const CompaniesTable = (props: HTMLAttributes<HTMLTableElement>) => {
  const { companies } = useReduxSelector((state) => state.companies);
  const { selectedIds, isSelectedAll, onSelectedAll, onSelectedCompany, onDeleteCompany, onAddCompany, onEditCompany } =
    useTableCompanies();

  return (
    <table className={styles.table} {...props}>
      <thead>
        <tr>
          <th className={styles.checkbox_column}>
            <Checkbox label="Выделить всё" onChange={onSelectedAll} isCheckedDefault={isSelectedAll} />
          </th>
          <th colSpan={2}>
            <span className={styles.gap}>Компании</span>
            <div className={styles.flex}>
              <Button className={styles.gap} onClick={onDeleteCompany}>
                Удалить
              </Button>
              <Button className={styles.gap} onClick={onAddCompany}>
                Добавить
              </Button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company) => (
          <Row
            company={company}
            key={company.id}
            isSelected={isSelectedAll || selectedIds.includes(company.id)}
            onEditCompany={onEditCompany}
            onSelectedCompany={onSelectedCompany}
          />
        ))}
      </tbody>
    </table>
  );
};
