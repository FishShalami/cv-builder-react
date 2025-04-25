import { useState } from "react";
import "./App.css";
import PersonalInfo from "./PersonalInfo";

function App() {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const fullName = `${contactData.firstName} ${contactData.lastName}`;

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
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
            <PersonalInfo
              contactData={contactData}
              handleContactChange={handleContactChange}
            />
          </form>
        </div>
        <div className="outputs">
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
      </div>
    </>
  );
}

export default App;
