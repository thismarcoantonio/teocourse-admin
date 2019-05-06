import React from "react"
import Table from "common/Table"
import { Query } from "react-apollo"
import classroomsQuery from "./classroomsQuery"

function Classrooms() {
  const parseData = ({ classes = [] }) => {
    return classes.map(classroom => ([
      { label: "Código", slug: "code", value: classroom.code },
      { label: "Nome", slug: "name", value: classroom.name },
      { label: "Endereço", slug: "address", value: classroom.address }
    ]))
  }

  return (
    <Query query={classroomsQuery}>
      {({ data }) => {
        return (
          <Table
            title="Turmas"
            values={parseData(data)}
            emptyState="Não foram encontradas turmas para exibir"
          />
        )
      }}
    </Query>
  )
}

export default Classrooms
