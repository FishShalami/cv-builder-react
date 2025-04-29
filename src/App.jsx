import { useState } from "react";
import "./App.css";
import PersonalInfoSection from "./PersonalInfoSection";
import EducationSection from "./EducationSection";
import WorkExperienceSection from "./WorkExperienceSection";
import OutputPreview from "./OutputPreview";
import DownloadButton from "./DownloadButton";

function App() {
  const [contactData, setContactData] = useState({
    firstName: "Your",
    lastName: "Name",
    phone: "123-456-7890",
    email: "xyz@gmail.com",
  });

  const [workExperiences, setWorkExperiences] = useState([
    {
      companyName: "Company 1",
      positionTitle: "Manager",
      startDate: "2020-04-09",
      endDate: "2025-04-09",
      positionLocation: "Baltimore, MD",
      positionDescription:
        "Led a team of 10 in the development of a new product line.",
    },
    {
      companyName: "Company 2",
      positionTitle: "Developer",
      startDate: "2021-04-09",
      endDate: "2022-04-09",
      positionLocation: "New York, NY",
      positionDescription:
        "Developed and maintained web applications using React and Node.js.",
    },
  ]);

  const [education, setEducation] = useState([
    {
      schoolName: "University of Maryland",
      degree: "Bachelor of Science in Computer Science",
      startDateEducation: "2015-09-01",
      endDateEducation: "2019-05-15",
      educationLocation: "College Park, MD",
    },
    {
      schoolName: "Johns Hopkins University",
      degree: "Master of Science in Computer Science",
      startDateEducation: "2019-09-01",
      endDateEducation: "2021-05-15",
      educationLocation: "Baltimore, MD",
    },
  ]);

  return (
    <>
      <div className="inputs-outputs">
        <div className="inputs">
          <DownloadButton />
          <PersonalInfoSection
            contactData={contactData}
            setContactData={setContactData}
          />
          <EducationSection education={education} setEcucation={setEducation} />
          <WorkExperienceSection
            workExperiences={workExperiences}
            setWorkExperiences={setWorkExperiences}
          />
        </div>
        <OutputPreview
          contactData={contactData}
          education={education}
          workExperiences={workExperiences}
        />
      </div>
    </>
  );
}

export default App;
