import React, { useState } from "react";
import M from "materialize-css";
import axios from "axios";
import "./style.css";
import {  Route, Redirect } from "react-router-dom";
import { Col, Row } from "react-materialize";
import MainContainer from "../pages/MainContainer"


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = (event) => {
    event.preventDefault();
    axios.get('/api/auth/logout', function(req, res){
        console.log("this")
      });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    document.getElementById("myForm").reset();

    const userData = {
      name: name,
      email: email,
      password: password,
    };
    // routing needs to be done here
    axios
      .post("/api/auth/newregister", userData)
    //   .post("/api/auth/freshregister", userData)
      .then((res) => {
          const username = res.data.name;
          console.log("Hi " + username + "!")
          setName(username);
        if (res.status === 200) {
          console.log("successful login");
          setLoggedIn(true);
          // setName("");
          // setPassword("");
          // setEmail("");
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        setLoggedIn(false);
        alert("Email and/or Password are not correct. Please try again.");
      });
  };

  return (
    <div>
      {loggedIn ? (
        // <h1>Hi {name} </h1>
        <MainContainer name={name} />
      ) :
      (
        <div className="container">
      <div className="row">
        <div className="col s12 center">
          <h3>Begin your Better Earth lifestyle!</h3>
        </div>
      </div>

      <div className="row">
        <form id="myForm" className="col s12" onSubmit={onSubmit}>
          <div className="row">
            <div className="col s1 m3 l3"></div>
            <div className="input-field col s10 m6 m6">
              <input
                id="name"
                type="text"
                className="validate"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="col s1 m3 l3"></div>
          </div>

          <div className="row">
            <div className="col s1 m3 l3"></div>
            <div className="input-field col s10 m6 m6">
              <input
                id="email"
                type="email"
                className="validate"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="col s1 m3 l3"></div>
          </div>
          <div className="row">
            <div className="col s1 m3 l3"></div>
            <div className="input-field col s10 m6 m6">
              <input
                id="password"
                type="password"
                className="validate"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="col s1 m3 l3"></div>
          </div>
          <div className="row">
            <div className="col s12 center">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
                
              >
                Register
                <i className="material-icons prefix">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
                onClick={logout}
              >
                Logout
                <i className="material-icons prefix">send</i>
              </button>
    </div>

      )

      }
    </div>
    
  );
}

export default Register;
