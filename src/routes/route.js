import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import { __user } from "helpers/auth_user"

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      // if (isAuthProtected && !__user()) {
      //   return (
      //     <Redirect
      //       to={{ pathname: "/login", state: { from: props.location } }}
      //     />
      //   )
      // }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
}

export default Authmiddleware;
