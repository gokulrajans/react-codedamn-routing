import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./component/ProfileDetails";
import Register from "./component/Register";
import SignIn from "./component/SignIn";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <div>
            <Link to="/sign-in">SignIn</Link>
          </div>
          <div>
            <Link to="/register">Register</Link>
          </div>
          {/* <div>
            <Link to="/profile-details">ProfileDetails</Link>
          </div> */}
        </div>
        <Routes>
          <Route exact path="/sign-in" element={<SignIn />}></Route>
          <Route
            exact
            path="/profile-details"
            element={<ProfileDetails />}
          ></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
