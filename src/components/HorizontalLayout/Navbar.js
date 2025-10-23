import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

const Navbar = props => {

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav className="navbar navbar-light navbar-expand-lg topnav-menu" id="navigation" >
            <Collapse isOpen={props.leftMenu} className="navbar-collapse" id="topnav-menu-content" >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard"> {props.t("Dashboard")} {props.menuOpen}</Link>
                </li>
                <li className="nav-item">
                  <Link to="/inbox" className="nav-link" >  {props.t("Inbox")}</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contacts" className="nav-link" >  {props.t("Contacts")}</Link>
                </li>
                <li className="nav-item">
                  <Link to="/pre-deals" className="nav-link" >   {props.t("Pre-Deals")}</Link>
                </li>
                <li className="nav-item">
                  <Link to="/deals" className="nav-link" > {props.t("Deals")}</Link>
                </li>
                <li className="nav-item">
                  <Link to="/reports" className="nav-link" > {props.t("Reports")}</Link>
                </li>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
};

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout;
  return { leftMenu };
};

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
);
