import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
// import RegistrationForms from "./pages/register/RegistrationForms";


const App = () => {
  return (
    <div className="bg-RfBlue">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          {/* <Route path="/register" element={<RegistrationForms />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
