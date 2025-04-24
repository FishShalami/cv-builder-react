import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
          <h1>Vite</h1>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <form action="post">
            <fieldset>
              <legend>Personal Information</legend>
              <div className="pi">
                <div className="pi-row1">
                  <input
                    type="text"
                    name="firstName"
                    id="firstname"
                    placeholder="First name"
                    value={contactData.firstName}
                    onChange={handleContactChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    id="lastname"
                    placeholder="Last name"
                    value={contactData.lastName}
                    onChange={handleContactChange}
                  />
                </div>
                <div className="pi-row2">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="XXX-XXX-XXXX"
                    value={contactData.phone}
                    onChange={handleContactChange}
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="xyz@gmail.com"
                    value={contactData.email}
                    onChange={handleContactChange}
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="outputs">
          <h1>Resume</h1>
          {contactData.firstName !== "" && <h2>{fullName}</h2>}
          <p>
            {(contactData.phone !== "") | (contactData.email !== "") && (
              <h2>
                {contactData.phone} | {contactData.email}
              </h2>
            )}
          </p>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  );
}

export default App;
