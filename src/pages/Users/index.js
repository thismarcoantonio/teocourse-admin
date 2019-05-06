import React from "react"
import Table from "common/Table"
import { Query } from "react-apollo"
import usersQuery from "./usersQuery"

function Users() {
  const parseData = ({ users = [] }) => {
    return users.map(user => ([
      { label: "Nome", slug: "name", value: user.name },
      { label: "Email", slug: "email", value: user.email }
    ]))
  }

  return (
    <Query query={usersQuery}>
      {({ data }) => {
        return (
          <Table
            title="Usuários"
            values={parseData(data)}
            emptyState="Não foram encontradas usuários para exibir"
          />
        )
      }}
    </Query>
  )
}

export default Users
