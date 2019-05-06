import gql from "graphql-tag"

export default gql`
  query GetClasses {
    classes {
      id
      name
      address
      area
      city
      state
      code
    }
  }
`
