
import { Routes, Route } from "react-router-dom";
import Principal from "../pages/Principal";


function Main(props) {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/login" element={<Principal />} />

      </Routes>
    </div>
  );
}

export default Main;
