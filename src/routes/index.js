import React from "react"
import { Redirect } from "react-router-dom"


// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import Inbox from "pages/Inbox"
import Contacts from "pages/Contacts"
import PreDeals from "pages/Pre-Deals"
import Deals from "pages/Deals"
import Reports from "pages/Reports"
import ContactDetails from "pages/SinglePages/ContactsDetails"

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/inbox", component: Inbox },
  { path: "/contacts", component: Contacts },
  { path: "/contact-details", component: ContactDetails },
  { path: "/pre-deals", component: PreDeals },
  { path: "/deals", component: Deals },
  { path: "/reports", component: Reports },


  // //profile
  { path: "/profile", component: UserProfile },

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
