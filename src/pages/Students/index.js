import React from "react"
import Table from "common/Table"
import { Query } from "react-apollo"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
import studentsQuery from "./studentsQuery"

function Students() {
  const parseData = ({ students = [] }) => {
    return students.map(student => ([
      { label: "Nome", slug: "name", value: student.name },
      { label: "Email", slug: "email", value: student.email },
      { label: "CPF", slug: "cpf", value: student.cpf }
    ]))
  }

  return (
    <Query query={studentsQuery}>
      {({ data }) => (
        <Table
          title="Alunos"
          values={parseData(data)}
          renderActions={() => (
            <Button component={Link} to="/alunos/criar">
              Adicionar
            </Button>
          )}
          emptyState="Não foram encontrados alunos para exibir"
        />
      )}
    </Query>
  )
}

export default Students
