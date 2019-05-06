import gql from "graphql-tag"

export default gql`
  query GetStudents {
    students {
      id
      name
      email
      cpf
    }
  }
`
