import './style.css';
import TableItem from '../tableItem/TableItem';
import usePagination from '../../hooks/usePagination';
import Pagination from '../../components/pagination/Pagination';
// import useGridData from '../../hooks/useGridData';

export default function Table(props) {
  // const users = useGridDataList();
  const {
    categoryTitles,
    users,
    selectedCategoryIndex,
    selectStateCategory,
    setSelectCategoryIndex,
    activeSymbol,
    setSelectedProfile,
    selectedProfile,
  } = props;

  const pagination = usePagination(users.length);
  const usersList = users.slice(pagination.skip, pagination.limit);

  return (
    <>
      <table className="tableMainContainer" cellSpacing="0">
        <thead className="tableContainerHead">
          <tr>
            {categoryTitles.map((item, index) => (
              <th
                onClick={() => {
                  setSelectCategoryIndex(index);
                  selectStateCategory();
                }}
                className={selectedCategoryIndex === index ? 'tableThItemActive' : 'tableThItem'}
                key={item + index}>
                {selectedCategoryIndex === index ? item + activeSymbol() : item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="tableContainer">
          {usersList.map((item, index) => (
            <TableItem
              key={item.phone + index}
              setSelectedProfile={setSelectedProfile}
              selectedProfile={selectedProfile}
              item={item}
              id={item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              phone={item.phone}
              state={item.adress.state}
            />
          ))}
        </tbody>
      </table>
      <Pagination {...pagination} />
    </>
  );
}
