import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"

export default function setupApollo({ token }) {
  const authLink = setContext((request, { headers }) => ({
    headers: {
      ...headers,
      ...token && { authorization: `Bearer ${token}` }
    }
  }))
  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_API
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
        errorPolicy: "ignore"
      },
      query: {
        fetchPolicy: "network-only",
        errorPolicy: "all"
      },
      mutate: {
        errorPolicy: "all"
      }
    }
  })
}
