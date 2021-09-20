import './style.css';
import TableItem from '../tableItem/TableItem';
import Pagination from '../../components/pagination/Pagination';

export default function Table(props) {
  const {
    categoryTitles,
    users,
    selectedCategoryIndex,
    selectStateCategory,
    setSelectCategoryIndex,
    activeSymbol,
    setSelectedProfile,
    selectedProfile,
    pagination,
  } = props;

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
