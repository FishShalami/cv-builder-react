import { useState } from "react";
import Education from "./Education";

function EducationSection({ education, setEducation }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    setEducation((prev) =>
      prev.map((edu, i) => (i === index ? { ...edu, [name]: value } : edu))
    );
  };

  const addEducation = () => {
    setEducation((prev) => [
      ...prev,
      {
        schoolName: "",
        degree: "",
        startDateEducation: "",
        endDateEducation: "",
        educationLocation: "",
      },
    ]);
  };

  const deleteEducation = (index) => {
    setEducation((prev) => prev.filter((_, i) => i != index));
  };

  return (
    <>
      <button
        type="button"
        className="collapsible"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "▼" : "▶"} Education
      </button>
      {isVisible && (
        <div className="edu-form">
          {education.map((edu, index) => (
            <div key={index} className="education-entry">
              <Education
                key={index}
                education={edu}
                handleEducationChange={(e) => handleEducationChange(index, e)}
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
          <button
            className="add-entry-button"
            type="button"
            onClick={addEducation}
          >
            Add Education
          </button>
        </div>
      )}
    </>
  );
}

export default EducationSection;
