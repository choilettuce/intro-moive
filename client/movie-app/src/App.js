import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Header from "./components/Header/header";
import "./App.css";
// import Login from "./components/login/login";
// import Login2 from "./components/login/login2";
import Login3 from "./components/login/login3";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes >
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element ={<Home />} />
        <Route path="/login" element={<Login3 />} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
