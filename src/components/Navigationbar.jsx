import { Container,Row,Col, Form, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

 import { Link } from "react-router-dom";
import React, { useRef } from 'react';

//import React from "react";

export  function Navigationbar(){
    return(
          <Container>
            <Row>
                <Col>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://static.vecteezy.com/system/resources/previews/004/818/823/non_2x/tractor-logo-or-farm-logo-template-suitable-for-any-business-related-to-agriculture-industries-free-vector.jpg" alt="Logo" height="30"  className="rounded-circle"/>&nbsp;
                    Farms
                </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/payment">
                      User Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/rules">
                      Rules
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button> &nbsp;

                  <button className="btn btn-outline-success" type="submit">
                    <a href="/login" style={{textDecoration:"none",color:"white"}}>SignIn</a>
                  </button>
                </form>
              </div>
            </div>
          </nav>
                </Col>
            </Row>
          </Container>
        );
      }