import gql from "graphql-tag"

export default gql`
  mutation CreateStudent($input: StudentInput!) {
    createStudent(input: $input) {
      id
    }
  }
`
