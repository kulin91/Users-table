import './style.css';
import useUsersList from '../../hooks/useUsersList';
import TableItem from '../tableItem/TableItem';

const tableFieldConfig = [
  { name: 'ID' },
  { name: 'First name' },
  { name: 'Last name' },
  { name: 'Email' },
  { name: 'Phone' },
  { name: 'State' },
];

export default function Table() {
  const users = useUsersList();
  console.log(users.length);
  return (
    // <div>
    <>
      <tbody className="tableContainer">
        <tr>
          {tableFieldConfig.map((item, index) => (
            <th className="tableThItem" key={item.name + index}>
              {item.name}
            </th>
          ))}
        </tr>
        {users.map((item, index) => (
          <TableItem
            key={item.phone + index}
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
