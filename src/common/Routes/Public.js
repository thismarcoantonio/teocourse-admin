import React from "react"
import Login from "pages/Login"
import { Route, Redirect, Switch } from "react-router-dom"

function PublicRoutes({ onLogin }) {
  return (
    <Switch>
      <Route path="/" render={() => <Login onLogin={onLogin} />} exact />
      <Redirect to="/" />
    </Switch>
  )
}

export default PublicRoutes
