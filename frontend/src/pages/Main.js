
import { Routes, Route } from "react-router-dom";
import Principal from "../components/Principal";
import RegistView from "../components/regisView";
import Checkview from "../components/checkView";

import CategTotal from "../components/CategTotal";

import OptionsUsers from "../components/optionsView";
import Categorias from "../components/categorias";
import VoluntarioView from "../components/voluntarioView"



function Main(props) {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/login" element={<Principal />} />
      <Route path="/Regist" element={<RegistView />} />
      <Route path="checkView" element={<Checkview />} />

      <Route path="/categories/:usuario" element={<CategTotal />} />

     
      <Route path="/categories2/:todo/:usuario" element={<Categorias />} />
      <Route path="/voluntarioView" element={<VoluntarioView/>} />



   





      <Route path="/Options/:usuario" element={<OptionsUsers />} />
      <Route path="/checkView/:usuario" element={<Checkview />} />

      </Routes>
    </div>
  );
}

export default Main;
