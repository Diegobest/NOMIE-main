import './App.css';
import React, { useState, createContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Launch from './Pages/Launch';
import CreateAccount from './Pages/CreateAccount';
import ProfileOnboard from './Pages/ProfileOnboard';
import ProfileCreate from './Pages/ProfileCreate';
import JoinSpace from './Pages/JoinSpace';
import SignIn from './Pages/SignIn';
import MemberHome from './Pages/MemberHome';
import SpaceHome from './Pages/SpaceHome';
import ProtectedRoute from './Components/ProtectedRoute';

export const UserContext = createContext([]);

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App">
        <Routes>
          <Route path="/launch" element={<Launch />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/profileonboard" element={<ProfileOnboard />} />
          <Route path="/profilecreate" element={<ProfileCreate />} />
          <Route path="/joinspace" element={<JoinSpace />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/memberhome" element={<MemberHome />} />
            <Route path="/spacehome" element={<SpaceHome />} />
          </Route> 
          <Route path="/" element={<Navigate replace to="/joinspace" />} />
        </Routes>
      </div>
    </UserContext.Provider>
  )
};

export default App;
