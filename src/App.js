import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import BrowserRouter and Route
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import SignIn from './components/Auth/SignIn';


function App() {
  return (
    <BrowserRouter> {/* Wrap your entire app with BrowserRouter */}
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Add a Route for the Home component */}
          <Route path="/signin" element={<SignIn />} /> {/* Add a Route for the Home component */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
