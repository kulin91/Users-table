import './style.css';

export default function TableItem(props) {
  const { id, firstName, lastName, email, phone, state } = props;
  return (
    <tr>
      <th className="tableItemContainer">{id}</th>
      <th className="tableItemContainer">{firstName}</th>
      <th className="tableItemContainer">{lastName}</th>
      <th className="tableItemContainer">{email}</th>
      <th className="tableItemContainer">{phone}</th>
      <th className="tableItemContainer">{state}</th>
    </tr>
  );
}
