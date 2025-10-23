import { __user } from "helpers/auth_user"

export default function authHeader() {
  if (__user()) {
    return { Authorization: __user('token')}
  } else {
    return {}
  }
}
