import React from "react"
import PublicRoutes from "./Public"
import PrivateRoutes from "./Private"
import { BrowserRouter } from "react-router-dom"

function Routes({ isAuthenticated, onLogin }) {
  return (
    <BrowserRouter>
      {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes onLogin={onLogin} />}
    </BrowserRouter>
  )
}

export default Routes
