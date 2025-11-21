import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { withTranslation } from "react-i18next"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"
import user1 from "../../../assets/images/users/avatar-1.jpg"
import { __user } from "helpers/auth_user"

const ProfileMenu = props => {
  const [menu, setMenu] = useState(false)
  const [username, setusername] = useState("Admin")
  useEffect(() => {
    if (__user())
      setusername(__user('name'))
  }, [props.success])

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block">
        <DropdownToggle className="btn header-item " id="page-header-user-dropdown" tag="button" >
          <img className="rounded-circle header-profile-user" src={user1} alt="Header Avatar" />
          <span className="d-none d-xl-inline-block ms-2 me-1">{username}</span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag="a" href="#" className="d-flex">
            <i className="bx bx-envelope font-size-16 align-middle me-1" />
            <p>Steve@VTechAgents.Com</p>
          </DropdownItem>
          <div className="dropdown-divider" />
          <DropdownItem tag="a" href="/templates">
            <i className="bx bx-file font-size-16 align-middle me-1" />
            {props.t("Templates")}
          </DropdownItem>
          <DropdownItem tag="a" href="/team-settings">
            <i className="bx bx-group font-size-16 align-middle me-1" />
            {props.t("Team Settings")}
          </DropdownItem>
          <DropdownItem tag="a" href="/profile">
            <i className="bx bx-user-circle font-size-16 align-middle me-1" />
            {props.t("Profile")}
          </DropdownItem>
          <DropdownItem tag="a" href="/settings">
            <i className="bx bx-cog font-size-16 align-middle me-1" />
            {props.t("Settings")}
          </DropdownItem>
          <DropdownItem tag="a" href="/user-help">
            <i className="bx bx-help-circle font-size-16 align-middle me-1" />
            {props.t("Help")}
          </DropdownItem>
          <div className="dropdown-divider" />
          <Link to="/logout" className="dropdown-item">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>{props.t("Logout")}</span>
          </Link>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any
}

const mapStatetoProps = state => {
  const { error, success } = state.Profile
  return { error, success }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(ProfileMenu))
)
