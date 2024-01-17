import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ForgotPassword from "./components/auth/ForgotPassword";
import "./components/styles/theme.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login}></Route>
        <Route path="/signUp" Component={SignUp}></Route>
        <Route path="/forgotPassword" Component={ForgotPassword}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
