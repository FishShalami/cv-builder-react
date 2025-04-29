import moment from "moment";

function OutputPreview({ contactData, education, workExperiences }) {
  return (
    <div className="outputs">
      <div className="cv-header">
        {contactData.firstName !== "" && (
          <h1>{`${contactData.firstName} ${contactData.lastName}`}</h1>
        )}
        {(contactData.phone || contactData.email) && (
          <p>
            <span>
              {contactData.phone}
              {contactData.phone && contactData.email && " | "}
              {contactData.email}
            </span>
          </p>
        )}
      </div>
      <div className="education-header">
        <h2>Education</h2>
        <hr className="solid" />
      </div>
      <div className="education-body">
        {education.map((edu, index) => (
          <div className="school-body" key={index}>
            <div className="schoolline">
              <div className="school">
                <h3>{edu.schoolName}</h3>
                <p>{edu.educationLocation}</p>
              </div>
              <div className="schooldates">
                {edu.startDateEducation !== "" &&
                  moment(edu.startDateEducation).format("MMMM YYYY")}{" "}
                - {moment(edu.endDateEducation).format("MMMM YYYY")}
              </div>
            </div>
            <div className="degree">
              <p>{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="work-experience-header">
        <h2>Work Experience</h2>
        <hr className="solid" />
      </div>
      <div className="work-experience-body">
        {workExperiences.map((work, index) => (
          <div className="work-body" key={index}>
            <div className="company-line">
              <h3>{work.companyName}</h3>
              <p>{work.positionLocation}</p>
            </div>
            <div className="work-position">
              <p>
                <b>{work.positionTitle}</b>
              </p>
              <p>
                {moment(work.startDate).format("MMMM YYYY")} -{" "}
                {moment(work.endDate).format("MMMM YYYY")}
              </p>
            </div>
            <p>{work.positionDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OutputPreview;
