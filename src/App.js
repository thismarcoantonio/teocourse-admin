import React, { useState, useEffect } from "react"
import { ApolloProvider } from "react-apollo"
import { NotificationProvider } from "common/NotificationContext"
import { ThemeProvider } from "@material-ui/styles"
import Routes from "common/Routes"
import setupApollo from "config/setupApollo"
import theme from "theme"

function App() {
  const [token, setToken] = useState(localStorage.getItem("_t"))
  const [client, setClient] = useState(null)

  const handleLogin = ({ data }) => {
    const token = data.login
    localStorage.setItem("_t", token)
    setToken(token)
  }

  useEffect(() => {
    const apolloClient = setupApollo({ token })
    setClient(apolloClient)
  }, [token])

  return client ? (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <NotificationProvider>
          <Routes onLogin={handleLogin} isAuthenticated={!!token} />
        </NotificationProvider>
      </ThemeProvider>
    </ApolloProvider>
  ) : "Carregando"
}

export default App
