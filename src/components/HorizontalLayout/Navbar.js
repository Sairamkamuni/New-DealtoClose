import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import ProfileMenu from "components/CommonForBoth/TopbarDropdown/ProfileMenu";
import Searchbar from "pages/utils/search_bar";

const Navbar = props => {

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu d-flex align-items-center flex-nowrap"
            id="navigation"
          >
            {/* LEFT MENU */}
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse w-auto flex-nowrap"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav flex-row">
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">{props.t("Dashboard")}</Link>
                </li>
                <li className="nav-item">
                  <Link to="/inbox" className="nav-link">{props.t("Inbox")}</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contacts" className="nav-link">{props.t("Contacts")}</Link>
                </li>
                <li className="nav-item">
                  <Link to="/pre-deals" className="nav-link">{props.t("Pre-Deals")}</Link>
                </li>
                <li className="nav-item">
                  <Link to="/deals" className="nav-link">{props.t("Deals")}</Link>
                </li>
                <li className="nav-item">
                  <Link to="/reports" className="nav-link">{props.t("Reports")}</Link>
                </li>
              </ul>
            </Collapse>

            {/* RIGHT SIDE */}
            <div className="ms-auto d-flex align-items-center flex-nowrap gap-3">
              <Searchbar style={{ width: "560px", borderRadius: "50%" }} />
              <i className="far fa-envelope-open fs-4 text-white" />
              <i className="far fa-bell fs-4 text-white" />
              <i className="far fa-calendar-alt fs-4 text-white" />
              <i className="bx bx-plus fs-4 text-white" />
              <div style={{ marginBottom: "34px" }}>
                <ProfileMenu />
              </div>
            </div>
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
