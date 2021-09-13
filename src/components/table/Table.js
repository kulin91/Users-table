import './style.css';

const tableFieldConfig = [
  { name: 'ID' },
  { name: 'First name' },
  { name: 'Last name' },
  { name: 'Email' },
  { name: 'Phone' },
  { name: 'State' },
];

export default function Table() {
  return (
    <div>
      <table className="tableContainer">
        <tr>
          {tableFieldConfig.map((item) => (
            <th className="tableThItem" key={item}>
              {item.name}
            </th>
          ))}
        </tr>
      </table>
    </div>
  );
}
