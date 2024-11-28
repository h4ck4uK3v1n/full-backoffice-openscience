import type { IProps } from './types/IProps'; // Importación de tipo
import styles from './TableComponent.module.scss';
import ButtonYesNo from '../ButtonYesNo/Button';
import Toggle from '../Toggle/Toggle';

function TableComponent({ data }: IProps) {
  return (
    <div className={styles.table__component}>
      <table className={styles.table__component__table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Visible</th>
            <th>Protected</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody className={styles.table__component__body}>
          {data.map((row) => (
            <tr key={row.id} className={styles.table__component__fila}>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>
                <ButtonYesNo variant="primary" aria-label={`Change visibility for ${row.title}`}>
                  {row.visible ? 'Yes' : 'No'}
                </ButtonYesNo>
              </td>
              <td>
                <Toggle aria-label={`Toggle protection for ${row.title}`} />
              </td>
              <td>{row.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
