import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forms from "./pages/form/Forms";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/registration/Register";

const App = () => {
  return (
    <div className="bg-RfBlue">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} /> 
          <Route path="/register" element={<Register/>} /> 
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
