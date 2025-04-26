function WorkExperience({ work, handleWorkExperienceChange }) {
  return (
    <fieldset>
      <legend>Work Experience</legend>
      <div className="we">
        <input
          type="text"
          name="companyName"
          id="companyName"
          placeholder="Company Name"
          value={work.companyName}
          onChange={handleWorkExperienceChange}
        />
        <input
          type="text"
          name="positionTitle"
          id="positionTitle"
          placeholder="Your Position"
          value={work.positionTitle}
          onChange={handleWorkExperienceChange}
        />
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={work.startDate}
          onChange={handleWorkExperienceChange}
        />
        <input
          type="date"
          name="endDate"
          id="endDate"
          value={work.endDate}
          onChange={handleWorkExperienceChange}
        />
        <input
          type="text"
          name="positionLocation"
          id="positionLocation"
          placeholder="Location"
          value={work.positionLocation}
          onChange={handleWorkExperienceChange}
        />
        <textarea
          type="text"
          name="positionDescription"
          id="positionDescription"
          placeholder="Position Description"
          rows="2"
          value={work.positionDescription}
          onChange={handleWorkExperienceChange}
        />
      </div>
    </fieldset>
  );
}

export default WorkExperience;
