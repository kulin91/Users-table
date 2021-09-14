import './style.css';
import TableItem from '../tableItem/TableItem';
// import useUsers from '../../hooks/useUsers';

export default function Table(props) {
  // const users = useUsersList();
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

  return (
    <>
      <tbody className="tableContainer">
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
        {users.map((item, index) => (
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
    </>
    // </div>
  );
}
