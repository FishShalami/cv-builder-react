import { useState } from "react";
import WorkExperience from "./WorkExperience";

function WorkExperienceSection({ workExperiences, setWorkExperiences }) {
  const [isVisible, setIsVisible] = useState(false);

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

  const deleteWorkExperience = (index) => {
    setWorkExperiences((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <button
        type="button"
        className="collapsible"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "▼" : "▶"} Work Experience
      </button>
      {isVisible && (
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
            className="add-entry-button"
            type="button"
            onClick={addWorkExperience}
          >
            Add Work Experience
          </button>
        </div>
      )}
    </>
  );
}

export default WorkExperienceSection;
