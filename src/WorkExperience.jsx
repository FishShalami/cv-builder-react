function WorkExperience({ workData, handleWorkExperienceChange }) {
  return (
    <fieldset>
      <legend>Work Experience</legend>
      <div className="we">
        <input
          type="text"
          name="companyName"
          id="companyName"
          placeholder="Company Name"
          value={workData.companyName}
          onChange={handleWorkExperienceChange}
        />
        <input
          type="text"
          name="positionTitle"
          id="positionTitle"
          placeholder="Your Position"
          value={workData.positionTitle}
          onChange={handleWorkExperienceChange}
        />
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={workData.startDate}
          onChange={handleWorkExperienceChange}
        />
        <input
          type="date"
          name="endDate"
          id="endDate"
          value={workData.endDate}
          onChange={handleWorkExperienceChange}
        />
        <input
          type="text"
          name="positionLocation"
          id="positionLocation"
          placeholder="Location"
          value={workData.positionLocation}
          onChange={handleWorkExperienceChange}
        />
        <input
          type="text"
          name="positionDescription"
          id="positionDescription"
          placeholder="Position Description"
          value={workData.positionDescription}
          onChange={handleWorkExperienceChange}
        />
      </div>
    </fieldset>
  );
}

export default WorkExperience;
