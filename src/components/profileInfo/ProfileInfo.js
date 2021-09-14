import './style.css';

export default function ProfileInfo(props) {
  const { selectedProfile } = props;
  return (
    <div className={'profileInfoContainer'}>
      <div className="profileInfoTitle">ProfileInfo:</div>
      <div className="profileInfoSelectedProfile">
        Selected Profile: {selectedProfile.firstName} {selectedProfile.lastName}
      </div>
      <div className="profileInfoDescription">Description: {selectedProfile.description}</div>
      <div className="profileInfoAdress">Adress: {selectedProfile.adress.streetAddress}</div>
      <div className="profileInfoSity">City: {selectedProfile.adress.city}</div>
      <div className="profileInfoState">State: {selectedProfile.adress.state}</div>
      <div className="profileInfoIndex">Index: {selectedProfile.adress.zip}</div>
    </div>
  );
}
