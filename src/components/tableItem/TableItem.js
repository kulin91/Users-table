import './style.css';

export default function TableItem(props) {
  const { id, firstName, lastName, email, phone, state } = props;
  return (
    <tr>
      <th className="tableItem">{id}</th>
      <th>{firstName}</th>
      <th>{lastName}</th>
      <th>{email}</th>
      <th>{phone}</th>
      <th>{state}</th>
    </tr>
  );
}
