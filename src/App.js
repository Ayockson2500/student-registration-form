import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Forms from "./pages/register/RegistrationForms";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";


const App = () => {
  return (
    <div className="bg-RfBlue">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/register" element={<Forms />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
