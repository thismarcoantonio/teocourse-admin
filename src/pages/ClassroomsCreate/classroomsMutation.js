import gql from "graphql-tag"

export default gql`
  mutation CreateClassroom($input: ClassInput!) {
    createClass(input: $input) {
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
