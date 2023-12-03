import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({
  auth: { isAuthenticated, loading }
}) => (isAuthenticated && !loading ? <Outlet /> : <Navigate to="/login" />);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
