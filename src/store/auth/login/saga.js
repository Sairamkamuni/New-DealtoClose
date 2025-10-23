import { call, put, takeEvery } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes"
import { apiError, loginSuccess, logoutUserSuccess } from "./actions"
import { post } from 'helpers/api_helper'
import cookieHelper from "helpers/getCookieData"

const userLogin = async (user) => await post('/auth/login', user)

function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(userLogin, {
      email: user.email,
      password: user.password,
      phone: user.phone || "",
      country_code: user.country_code || "+91",
      is_login: "1",
    })

    const userData = response.data

    // console.log(userData)

    // Set cookies
    cookieHelper.setCookie("authUser", JSON.stringify({ ...userData }), 1)
    // cookieHelper.setCookie("auth-key", userData.session_id, 1)
    // cookieHelper.setCookie('access_token', userData.accessToken, 1)
    // cookieHelper.setCookie('refresh_token', userData.refreshToken, 1, 7)

    localStorage.setItem('role', userData.role?.role)

    yield put(loginSuccess(userData))

    // Redirect based on role
    if (userData.role?.role.toLowerCase() !== 'admin') {
      window.location.href = "/login";
    } else {
      history.push("/dashboard")
    }
  } catch (error) {
    yield put(apiError('invalid login credentials'))
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    // cookieHelper.deleteCookie("authUser")
    cookieHelper.deleteCookie("session_id")
    cookieHelper.deleteCookie("access_token")
    cookieHelper.deleteCookie("refresh_token")


    history.push("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
