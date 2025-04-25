import { useState } from "react";
import "./App.css";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";

function App() {
  const [contactData, setContactData] = useState({
    firstName: "Your",
    lastName: "Name",
    phone: "123-456-7890",
    email: "xyz@gmail.com",
  });

  const fullName = `${contactData.firstName} ${contactData.lastName}`;

  const [workData, setWorkData] = useState({
    companyName: "Company 1",
    positionTitle: "Manager",
    startDate: "2020-04-09",
    endDate: "2025-04-09",
    positionLocation: "Baltimore, MD",
    positionDescription:
      "Led a team of 10 in the development of a new product line.",
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWorkExperienceChange = (e) => {
    const { name, value } = e.target;
    setWorkData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="inputs-outputs">
        <div className="inputs">
          <h3>Data Input</h3>
          <form action="post">
            <PersonalInfo
              contactData={contactData}
              handleContactChange={handleContactChange}
            />
            <WorkExperience
              workData={workData}
              handleWorkExperienceChange={handleWorkExperienceChange}
            />
          </form>
        </div>
        <div className="outputs">
          <div className="cv-header">
            {contactData.firstName !== "" && <h1>{fullName}</h1>}
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
          <div className="work-experience-header">
            <h2>Work Experience</h2>
            <hr className="solid" />
            <div className="work-experence-body">
              <h3>{workData.companyName}</h3>
              <p>
                <b>{workData.positionTitle}</b>
                <br />
                {workData.startDate} - {workData.endDate}
                <br />
                {workData.positionLocation}
                <br />
                {workData.positionDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
