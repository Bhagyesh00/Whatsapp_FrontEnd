import { Route, Routes } from "react-router-dom";
import HomePage from "./Componets/HomePage";
import Signin from "./Componets/Register/Signin";
import SignUp from "./Componets/Register/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
