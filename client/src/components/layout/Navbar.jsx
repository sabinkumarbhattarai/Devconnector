import React from "react";
import { Outlet, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/auth/auth.action";
import PropTypes from "prop-types";

const Navbar = ({ auth: { loading, isAuthenticated }, logout }) => {
  return (
    <>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code"></i> DevConnector
          </Link>
        </h1>

        {!loading && isAuthenticated ? (
          <ul>
            <li>
              <Link to="dashboard">
                <i className="fas fa-user" />{" "}
                <span className="hide-sm">Dashboar</span>
              </Link>
            </li>
            <li>
              <a onClick={logout} href="/#!">
                <i className="fas fa-sign-out-alt">
                  <span className="hide-sm">Logout</span>
                </i>
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="developer">Developers</Link>
            </li>
            <li>
              <Link to="register">Register</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
          </ul>
        )}
      </nav>
      <Outlet />
    </>
  );
};

Navbar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
