import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

export class Header extends Component {
  closeMenu(e) {
    e.target.closest(".dropdown").classList.remove("show");
    e.target.closest(".dropdown .dropdown-menu").classList.remove("show");
  }

  toggleHeaderMenu(e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("az-header-menu-show");
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      document.querySelector("body").classList.remove("az-header-menu-show");
    }
  }

  render() {
    return (
      <div >
        <div className="az-header">
          <div className="container ">
            <div className="az-header-left  ">
              <a href="#/" className="az-logo">
                <span></span> CCH
              </a>
              <a
                id="azMenuShow"
                onClick={event => this.toggleHeaderMenu(event)}
                className="az-header-menu-icon d-lg-none  "
                href="#/"
              >
                <span></span>
              </a>
            </div>
            <div className="az-header-menu ">
              <div className="az-header-menu-header">
                <Link to="/" className="az-logo">
                  <span></span> C.C.H
                </Link>
                <a
                  href="#/"
                  onClick={event => this.toggleHeaderMenu(event)}
                  className="close"
                >
                  &times;
                </a>
              </div>
              <ul className="nav">
                <li
                  className={
                    this.isPathActive("/dashboard")
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link to="/dashboard" className="nav-link">
                    <i className="typcn typcn-chart-area-outline"></i> Dashboard
                  </Link>
                </li>
                <li
                  className={
                    this.isPathActive("/dashboard")
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link to="/general-pages/cvs" className="nav-link">
                    <i className="typcn typcn-chart-area-outline"></i> CV
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Dropdown
                    className={
                      this.isPathActive("/general-pages")
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Dropdown.Toggle as={"a"} className="nav-link with-sub">
                      <i className="typcn typcn-document"></i> Pages
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub">

                      <Link
                        to="/general-pages/cvs"
                        className={
                          this.isPathActive("/general-pages/cvs")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Persnal CV
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </li> */}
                {/* <li className="nav-item">
                  <Dropdown
                    className={
                      this.isPathActive("/ui-elements") ||
                      this.isPathActive("/form") ||
                      this.isPathActive("/charts") ||
                      this.isPathActive("/tables")
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Dropdown.Toggle as={"a"} className="nav-link with-sub">
                      <i className="typcn typcn-book"></i> Components
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub az-menu-sub-mega">
                      <div className="container">
                        <div>
                          <nav className="nav">
                            <span>UI Elements</span>
                            <Link
                              to="/ui-elements/buttons"
                              className={
                                this.isPathActive("/ui-elements/buttons")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Buttons
                            </Link>
                            <Link
                              to="/ui-elements/dropdowns"
                              className={
                                this.isPathActive("/ui-elements/dropdowns")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Dropdown
                            </Link>
                            <Link
                              to="/ui-elements/icons"
                              className={
                                this.isPathActive("/ui-elements/icons")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Icons
                            </Link>
                          </nav>
                        </div>
                        <div>
                          <nav className="nav">
                            <span>Forms</span>
                            <Link
                              to="/form/form-elements"
                              className={
                                this.isPathActive("/form/form-elements")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Form Elements
                            </Link>
                          </nav>
                        </div>
                        <div>
                          <nav className="nav">
                            <span>Charts</span>
                            <Link
                              to="/charts/chartjs"
                              className={
                                this.isPathActive("/charts/chartjs")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              ChartJS
                            </Link>
                          </nav>
                        </div>
                        <div>
                          <nav className="nav">
                            <span>Tables</span>
                            <Link
                              to="/tables/basic-table"
                              className={
                                this.isPathActive("/tables/basic-table")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Basic Tables
                            </Link>
                          </nav>
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </li> */}
              </ul>
            </div>
            <div className="az-header-right">
            <a href="https://github.com/ichwillvergessen" className="az-header-search-link">Github</a>
      
              <Dropdown className="az-profile-menu">
                <Dropdown.Toggle as={"a"} className="az-img-user">
                  <img
                    src={require("../../assets/images/head.jpg")}
                    alt=""
                  ></img>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="az-dropdown-header d-sm-none">
                    <a
                      href="#/"
                      onClick={event => this.closeMenu(event)}
                      className="az-header-arrow"
                    >
                      <i className="icon ion-md-arrow-back"></i>
                    </a>
                  </div>
                  <div className="az-header-profile">
                    <div className="az-img-user">
                      <img
                        src={require("../../assets/images/head.jpg")}
                        alt=""
                      ></img>
                    </div>
                    <h6>Aziana Pechon</h6>
                    <span>Premium Member</span>
                  </div>

                  {/* <a href="#/" className="dropdown-item">
                    <i className="typcn typcn-user-outline"></i> My Profile
                  </a>
                  <a href="#/" className="dropdown-item">
                    <i className="typcn typcn-edit"></i> Edit Profile
                  </a>
                  <a href="#/" className="dropdown-item">
                    <i className="typcn typcn-time"></i> Activity Logs
                  </a>
                  <a href="#/" className="dropdown-item">
                    <i className="typcn typcn-cog-outline"></i> Account Settings
                  </a>
                  <Link to="/general-pages/signin" className="dropdown-item">
                    <i className="typcn typcn-power-outline"></i> Sign Out
                  </Link> */}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Header);
