import "antd/dist/antd.css";
import Maintenance from "./pages/Maintenance";
import Signup from "./pages/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Payments from "./pages/Payments";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import PropertyDetails from "./pages/PropertyDetails";
import Insurance from "./pages/Insurance";
import Login from "./pages/Login";
import SharedDocuments from "./pages/SharedDocuments";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          {<Route path="/" element={<Homepage />} /> }
          {<Route path="/home" element={<Homepage />} /> }
          {<Route path="/maintenance" element={<Maintenance />} /> }
          {<Route path="/payments" element={<Payments />} /> }
          {<Route path="/profile" element={<Profile />} /> }
          {<Route path="/contact" element={<Contact />} /> }
          {<Route path="/details" element={<PropertyDetails />} /> }
          {<Route path="/details" element={<PropertyDetails />} /> }
          {<Route path="/insurance" element={<Insurance />} /> }
          {<Route path="/login" element={<Login />} /> }
          {<Route path="/documents" element={<SharedDocuments />} /> }
          {<Route path="/signup" element={<Signup />} /> }
         
          

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
