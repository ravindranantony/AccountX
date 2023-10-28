import React, { useState } from 'react';
import './App.css';



// App Component
function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="main-container">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

// NavBar Component
function NavBar() {
  return (
    <div className="navbar">
      <img src="path/to/logo.png" alt="Logo" />
      <input type="text" placeholder="Search..." />
      <span className="notification-icon">🔔</span>
      <select className="profile-dropdown">
        <option>Profile</option>
        <option>Logout</option>
      </select>
    </div>
  );
}

// SideBar Component
function SideBar() {
  return (
    <div className="sidebar">
      <button>Dashboard</button>
      <button>Masters</button>
      <button>Sales</button>
      <button>purchases</button>
      <button>Expenses</button>
      <button>Banking</button>
      <button>Approvels</button>
      <button>Accounts</button>
      <button>reports</button>
      <button>e-way Bills</button>
      {/* Add other menu options... */}
    </div>
  );
}

// MainContent Component
function MainContent() {
  return (
    <div className="main-content">
      <Tabs />
      <CompanyProfile />
      <Addresses />
      <PersonalDetails />
      <BusinessLegalInfo />
      <BankAccountDetails />
      <SigningContactPerson />
      <ActionButtons />
    </div>
  );
}

// Other Components...
function Tabs() {
  return <div>Tabs Component Here...</div>;
}

function CompanyProfile() {
  const [companyProfileData, setCompanyProfileData] = useState({
      companyName: '',
      registrationStatus: 'Registered',
      companyType: '',
      businessEntityName: '',
      industry: '',
      logo: null
  });

  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setCompanyProfileData(prevData => ({
          ...prevData,
          [name]: value
      }));
  };

  const handleFileChange = (event) => {
      const file = event.target.files[0];
      setCompanyProfileData(prevData => ({
          ...prevData,
          logo: file
      }));
  };

  return (
      <div className="company-profile">
          <h2>Company Profile</h2>
          <div className="grid-row">
              <div className="input-group">
                  <input type="text" name="companyType" placeholder="Company Type" value={companyProfileData.companyType} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                  <input type="radio" name="registrationStatus" value="Registered" checked={companyProfileData.registrationStatus === 'Registered'} onChange={handleInputChange} /> Registered
                  <input type="radio" name="registrationStatus" value="Unregistered" checked={companyProfileData.registrationStatus === 'Unregistered'} onChange={handleInputChange} /> Unregistered
              </div>
              <div className="input-group">
                  <input type="text" name="companyID" placeholder="Company ID" onChange={handleInputChange} />
              </div>
          </div>
          <div className="grid-row">
              <div className="input-group">
                  <input type="text" name="GSTNumber" placeholder="GST Number" onChange={handleInputChange} />
              </div>
              <div className="input-group">
                  <input type="text" name="businessTradeName" placeholder="Business Trade Name" onChange={handleInputChange} />
              </div>
              <div className="input-group">
                  <input type="text" name="businessLegalName" placeholder="Business Legal Name" onChange={handleInputChange} />
              </div>
          </div>
          <div className="grid-row">
              <div className="input-group">
                  <input type="text" name="mobileNumber" placeholder="Mobile Number" onChange={handleInputChange} />
              </div>
              <div className="input-group">
                  <input type="text" name="businessEmail" placeholder="Business Email" onChange={handleInputChange} />
              </div>
              <div className="input-group">
                  <input type="text" name="industry" placeholder="Industry" value={companyProfileData.industry} onChange={handleInputChange} />
              </div>
          </div>
          <div className="grid-row">
              <div className="input-group">
                  {/* Placeholder for any additional inputs */}
              </div>
              <div className="input-group">
                  {/* Placeholder for any additional inputs */}
              </div>
              <div className="input-group">
                  <input type="file" name="logo" onChange={handleFileChange} />
              </div>
          </div>
      </div>
  );
}


function Addresses() {
  return <div>Addresses Component Here...</div>;
}

function PersonalDetails() {
  const [personalData, setPersonalData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    fatherName: '',
    motherName: '',
    gender: '',
    dateOfBirth: '',
    PAN: '',
    AADHAR: '',
    DIN: '',
    state: '',
    nationality: '',
    designation: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPersonalData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="personal-details">
      <h2>Personal Details</h2>
      <div className="input-group" style={{ display: 'flex', flexDirection: 'row' }}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} />
        <input type="text" name="middleName" placeholder="Middle Name" onChange={handleInputChange} />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} />
        <input type="text" name="fatherName" placeholder="Father Name" onChange={handleInputChange} />
      </div>
      <div className="input-group" style={{ display: 'flex', flexDirection: 'row' }}>
        <input type="text" name="motherName" placeholder="Mother Name" onChange={handleInputChange} />
        <input type="text" name="gender" placeholder="Gender" onChange={handleInputChange} />
        <input type="date" name="dateOfBirth" placeholder="Date of Birth" onChange={handleInputChange} />
        <input type="text" name="PAN" placeholder="PAN" onChange={handleInputChange} />
      </div>
      <div className="input-group" style={{ display: 'flex', flexDirection: 'row' }}>
        <input type="text" name="AADHAR" placeholder="AADHAR" onChange={handleInputChange} />
        <input type="text" name="DIN" placeholder="DIN" onChange={handleInputChange} />
        <input type="text" name="state" placeholder="State" onChange={handleInputChange} />
        <input type="text" name="nationality" placeholder="Nationality" onChange={handleInputChange} />
        <input type="text" name="designation" placeholder="Designation" onChange={handleInputChange} />
      </div>
    </div>
  );
}

function BusinessLegalInfo() {
  return <div>BusinessLegalInfo Component Here...</div>;
}

function BankAccountDetails() {
  return <div>BankAccountDetails Component Here...</div>;
}

function SigningContactPerson() {
  return <div>SigningContactPerson Component Here...</div>;
}

function ActionButtons() {
  return <div>ActionButtons Component Here...</div>;
}



export default App