function PersonalInfo({ contactData, handleContactChange }) {
  return (
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
            placeholder="123-456-7890"
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
  );
}

export default PersonalInfo;
