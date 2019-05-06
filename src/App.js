import React, { useState } from "react"
import { ApolloProvider } from "react-apollo"
import { ThemeProvider } from "@material-ui/styles"
import Routes from "common/Routes"
import client from "config/apollo"
import theme from "theme"

function App() {
  const [token, setToken] = useState(localStorage.getItem("_t"))

  const handleLogin = ({ data }) => {
    const token = data.login
    localStorage.setItem("_t", token)
    setToken(token)
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Routes onLogin={handleLogin} isAuthenticated={!!token} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
