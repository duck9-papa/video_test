import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom";
import NaverLogin from "./NaverLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" />
          <NaverLogin />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
