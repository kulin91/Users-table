import './style.css';

export default function ProfileInfo(props) {
  const { selectedProfile } = props;
  return (
    <div className={'profileInfoContainer'}>
      <div className="profileInfoTitle">Profile Info:</div>
      <div className="profileInfoDescriptionDiv">
        <span className="profileInfoDescription">Selected Profile: </span>
        <span className="profileInfoDescriptionSpan">
          {selectedProfile.firstName} {selectedProfile.lastName}
        </span>
      </div>
      <div className="profileInfoDescriptionDiv">
        <span className="profileInfoDescription">Description: </span>
        <span className="profileInfoDescriptionSpan">{selectedProfile.description}</span>
      </div>
      <div className="profileInfoDescriptionDiv">
        <span className="profileInfoDescription">Address: </span>
        <span className="profileInfoDescriptionSpan">{selectedProfile.adress.streetAddress}</span>
      </div>
      <div className="profileInfoDescriptionDiv">
        <span className="profileInfoDescription">City: </span>
        <span className="profileInfoDescriptionSpan">{selectedProfile.adress.city}</span>
      </div>
      <div className="profileInfoDescriptionDiv">
        <span className="profileInfoDescription">State: </span>
        <span className="profileInfoDescriptionSpan">{selectedProfile.adress.state}</span>
      </div>
      <div className="profileInfoDescriptionDiv">
        <span className="profileInfoDescription">Index: </span>
        <span className="profileInfoDescriptionSpan">{selectedProfile.adress.zip}</span>
      </div>
    </div>
  );
}
