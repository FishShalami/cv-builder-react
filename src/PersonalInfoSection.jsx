import { useState } from "react";
import PersonalInfo from "./PersonalInfo";

function PersonalInfoSection({ contactData, setContactData }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <button
        type="button"
        className="collapsible"
        onClick={() => setPiVisible(!isPiVisible)}
      >
        {isPiVisible ? "▼" : "▶"} Personal Info
      </button>
      {isPiVisible && (
        <div className="pi-form">
          <PersonalInfo
            contactData={contactData}
            handleContactChange={handleContactChange}
          />
        </div>
      )}
    </>
  );
}

export default PersonalInfoSection;
