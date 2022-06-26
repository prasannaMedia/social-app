import React from "react";
import { BrowserRouter as Router, Switch, Route, Link,Routes } from "react-router-dom";
import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register"element={<Register/>} >
        </Route>
        <Route path="/login" element={<Login/>}>
        </Route>
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
    </Router>
  );
}
