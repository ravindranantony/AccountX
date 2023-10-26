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
function PersonalDetails() {
  const [PersonalDetailsData, setPersonalDetailsData] =useState({
      FirstName: '',
      MiddleName :'',
      LastName: '',

  })
}
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
  return <div>PersonalDetails Component Here...</div>;
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



export default App;
