import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import "./i18n"
import { Provider } from "react-redux"
import { ToastProvider } from 'react-toast-notifications';

import store from "./store"

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <ToastProvider placement="top-right" autoDismiss autoDismissTimeout={2000} >
        <App />
      </ToastProvider>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById("root"))
serviceWorker.unregister()
