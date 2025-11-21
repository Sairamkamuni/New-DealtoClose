import React from "react"
import { Redirect } from "react-router-dom"


// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Profile
import UserProfiles from "../pages/Authentication/user-profile"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import Inbox from "pages/Inbox"
import Contacts from "pages/Contacts"
import PreDeals from "pages/Pre-Deals"
import Deals from "pages/Deals"
import Reports from "pages/Reports"
import ContactDetails from "pages/SinglePages/ContactsDetails"
import PreDealsDetails from "pages/SinglePages/PreDealDetails"
import DealsDetails from "pages/SinglePages/DealsDetails"

//  User Profile Dropdown
import UserTemplates from "pages/UserProfile/UserTemplates"
import CustomUserTemplates from "pages/UserProfile/CustomUserTemplates"
import TeamSettings from "pages/UserProfile/TeamSettings"
import UserProfile from "pages/UserProfile/Profile"
import Settings from "pages/UserProfile/Settings"

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/inbox", component: Inbox },
  { path: "/contacts", component: Contacts },
  { path: "/contact-details", component: ContactDetails },
  { path: "/pre-deals", component: PreDeals },
  { path: "/pre-deals-details", component: PreDealsDetails },
  { path: "/deals-details", component: DealsDetails },
  { path: "/deals", component: Deals },
  { path: "/reports", component: Reports },
  { path: "/templates", component: UserTemplates },
  { path: "/templates/1", component: CustomUserTemplates },
  { path: "/team-settings", component: TeamSettings },
  { path: "/profile", component: UserProfile },
  { path: "/settings", component: Settings },

  //profile
  { path: "/profiles", component: UserProfiles },

  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { publicRoutes, authProtectedRoutes }
