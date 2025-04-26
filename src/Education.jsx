function Education({ education, handleEducationChange }) {
  return (
    <fieldset>
      <legend>Education</legend>
      <div className="edu">
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          placeholder="School Name"
          value={education.schoolName}
          onChange={handleEducationChange}
        />
        <input
          type="text"
          name="degree"
          id="degree"
          placeholder="Degree Obtained"
          value={education.degree}
          onChange={handleEducationChange}
        />
        <input
          type="date"
          name="startDateEducation"
          id="startDateEducation"
          value={education.startDateEducation}
          onChange={handleEducationChange}
        />
        <input
          type="date"
          name="endDateEducation"
          id="endDateEducation"
          value={education.endDateEducation}
          onChange={handleEducationChange}
        />
        <input
          type="text"
          name="educationLocation"
          id="educationLocation"
          placeholder="Location"
          value={education.educationLocation}
          onChange={handleEducationChange}
        />
      </div>
    </fieldset>
  );
}

export default Education;
