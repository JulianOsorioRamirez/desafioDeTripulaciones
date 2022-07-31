
import { Routes, Route } from "react-router-dom";
import Principal from "../components/Principal";
import RegistView from "../components/regisView";
import Checkview from "../components/checkView";

import CategTotal from "../components/CategTotal";

import OptionsUsers from "../components/optionsView";



function Main(props) {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/login" element={<Principal />} />
      <Route path="/Regist" element={<RegistView />} />

      <Route path="checkView" element={<Checkview />} />
      <Route path="/categories" element={<CategTotal />} />
   





      <Route path="/Options" element={<OptionsUsers />} />
      <Route path="/checkView" element={<Checkview />} />

      </Routes>
    </div>
  );
}

export default Main;
