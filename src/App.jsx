import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [firstName, setfirstName] = useState(" ");

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
                    name="firstname"
                    id="firstname"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last name"
                  />
                </div>
                <div className="pi-row2">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="XXX-XXX-XXXX"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="xyz@gmail.com"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="outputs">
          <h1>Resume</h1>
          {firstName !== "" && <p>Your name is {firstName}.</p>}
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
