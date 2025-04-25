function Work Experience({ contactData, handleContactChange }) {
  return (
    <fieldset>
      <legend>Work Experience</legend>
      <div className="pi">
        <div className="pi-row1">
          <input
            type="text"
            name="companyName"
            id="companyName"
            placeholder="Company Name"
            value={contactData.firstName}
            onChange={handleContactChange}
          />
          <input
            type="text"
            name="postionTitle"
            id="postionTitle"
            placeholder="Your Position"
            value={contactData.lastName}
            onChange={handleContactChange}
          />
          <input type="date" name="startDate" id="startDate" />
          <input type="date" name="endDate" id="endDate" />
          <input type="text" name="positionLocation" id="positionLocation" />
          <input
            type="text"
            name="positionDescription"
            id="positionDescription"
          />
        </div>
      </div>
    </fieldset>
  );
}

export default PersonalInfo;
