import React from "react"
import Table from "common/Table"
import { Query } from "react-apollo"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
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
            variant="flat"
            values={parseData(data)}
            renderActions={() => (
              <Button component={Link} to="/turmas/criar">
                Adicionar
              </Button>
            )}
            emptyState="Não foram encontradas turmas para exibir"
          />
        )
      }}
    </Query>
  )
}

export default Classrooms
