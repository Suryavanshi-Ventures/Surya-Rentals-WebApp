import "antd/dist/antd.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Payments from "./pages/Payments";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          {<Route path="/" element={<Homepage />} /> }
          {<Route path="/home" element={<Homepage />} /> }
          {<Route path="/payments" element={<Payments />} /> }
          {<Route path="/profile" element={<Profile />} /> }
          

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
