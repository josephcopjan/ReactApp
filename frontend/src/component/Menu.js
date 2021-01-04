import React from "react";
import "../styles/main.css";
import { Link} from "react-router-dom";
import AppRoutes from '../../src/AppRoutes';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

export default class Menu extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  render() {
    return (

      <div className="component-app">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Logo</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><Link to="/category">Category2</Link></li>
                <li><a href="#">Contact</a></li>
                <li><Link to="/admin/student/new">Student</Link></li>
                <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Student<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="/admin/student/new">New</a></li>
                    <li><Link to="/admin/student/new">Find Student</Link></li>
                    <li><Link to="/admin/students">List of Students</Link></li>
                  </ul>
                </li>
              <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Create New<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Student</a></li>
                  <li><a href="#">Teacher</a></li>
                  <li><a href="#">Class</a></li>
                </ul>
              </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
            </div>
          </div>
        </nav>

      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-sm-2 sidenav">
            <p><a href="#">Link</a></p>
            <p><Link to="/category">Category2</Link></p>
            <p><a href="#">Link</a></p>
            <p><a href="/admin/student/new">Students</a></p>
          </div>
          <div className="col-sm-8 text-left">
            <AppRoutes/>
          </div>
          <div className="col-sm-2 sidenav">
            <div className="well">
              <p>ADS</p>
            </div>
            <div className="well">
              <p>ADS</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="container-fluid text-center">
        <p>Footer Text</p>
      </footer>

      </div>



    );
  }
}