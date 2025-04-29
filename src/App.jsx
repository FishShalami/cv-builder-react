import { useState } from "react";
import "./App.css";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import moment from "moment";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const [contactData, setContactData] = useState({
    firstName: "Your",
    lastName: "Name",
    phone: "123-456-7890",
    email: "xyz@gmail.com",
  });

  const fullName = `${contactData.firstName} ${contactData.lastName}`;

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

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    setEducation((prev) =>
      prev.map((edu, i) => (i === index ? { ...edu, [name]: value } : edu))
    );
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWorkExperienceChange = (index, e) => {
    const { name, value } = e.target;
    setWorkExperiences((prev) =>
      prev.map((work, i) => (i === index ? { ...work, [name]: value } : work))
    );
  };

  const addWorkExperience = () => {
    setWorkExperiences((prev) => [
      ...prev,
      {
        companyName: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        positionLocation: "",
        positionDescription: "",
      },
    ]);
  };

  const [isPiVisible, setPiVisible] = useState(true);
  const [isEduVisible, setEduVisible] = useState(true);
  const [isWeVisible, setWeVisible] = useState(false);

  function downloadPDF() {
    const outputDiv = document.querySelector(".outputs");

    html2canvas(outputDiv, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight); // Add the image to the PDF
      pdf.save("output.pdf"); // Save the PDF with a filename
    });
  }

  const deleteWorkExperience = (index) => {
    setWorkExperiences((prev) => prev.filter((_, i) => i !== index));
  };

  const deleteEducation = (index) => {
    setEducation((prev) => prev.filter((_, i) => i != index));
  };

  return (
    <>
      <div className="inputs-outputs">
        <div className="inputs">
          <div className="download">
            <button type="button" onClick={downloadPDF}>
              Download as PDF
            </button>
          </div>
          <form action="post">
            <button
              type="button"
              className="collapsible"
              onClick={() => setPiVisible(!isPiVisible)}
            >
              Personal Info
            </button>
            {isPiVisible && (
              <div className="pi-form">
                <PersonalInfo
                  contactData={contactData}
                  handleContactChange={handleContactChange}
                />
              </div>
            )}
            <button
              type="button"
              className="collapsible"
              onClick={() => setEduVisible(!isEduVisible)}
            >
              Education
            </button>
            {isEduVisible && (
              <div className="edu-form">
                {education.map((edu, index) => (
                  <div key={index} className="education-entry">
                    <Education
                      key={index}
                      education={edu}
                      handleEducationChange={(e) =>
                        handleEducationChange(index, e)
                      }
                    />
                    <button
                      type="button"
                      className="delete-button"
                      onClick={() => deleteEducation(index)}
                    >
                      Delete Education
                    </button>
                  </div>
                ))}
              </div>
            )}
            <button
              type="button"
              className="collapsible"
              onClick={() => setWeVisible(!isWeVisible)}
            >
              Work Experience
            </button>
            {isWeVisible && (
              <div className="we-form">
                {workExperiences.map((work, index) => (
                  <div key={index} className="we-entry">
                    <WorkExperience
                      key={index}
                      work={work}
                      handleWorkExperienceChange={(e) =>
                        handleWorkExperienceChange(index, e)
                      }
                    />
                    <button
                      type="button"
                      className="delete-button"
                      onClick={() => deleteWorkExperience(index)}
                    >
                      Delete Work Experience
                    </button>
                  </div>
                ))}
                <button
                  className="work-exp-button"
                  type="button"
                  onClick={addWorkExperience}
                >
                  Add Work Experience
                </button>
              </div>
            )}
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
      </div>
    </>
  );
}

export default App;
