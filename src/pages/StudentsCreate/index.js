import React from "react"
import BaseForm from "common/BaseForm"
import { validateEmail, required } from "utils/forms"
import { Mutation, withQuery } from "react-apollo"
import useNotification from "common/NotificationContext"
import studentsMutation from "./studentsMutation"
import classroomsQuery from "./classroomsQuery"

function StudentsCreate({ history, data: classrooms }) {
  const { notificate } = useNotification()
  const data = [
    {
      label: "Dados do Aluno",
      fields: [
        {
          label: "Nome Completo",
          name: "name",
          required: true,
          validate: required
        },
        {
          label: "E-mail",
          name: "email",
          required: true,
          validate: validateEmail
        },
        {
          label: "Telefone",
          name: "phone",
          pattern: "(99) 99999-9999"
        },
        {
          label: "CPF",
          name: "cpf",
          required: true,
          validate: required,
          pattern: "999.999.999-99"
        },
        {
          label: "RG",
          name: "rg"
        },
        {
          label: "Estado Civil",
          name: "civilState"
        },
        {
          label: "Data de Nascimento",
          name: "birthDate",
          required: true,
          validate: required,
          pattern: "99/99/9999"
        },
        {
          label: "Escolaridade",
          name: "scholarity",
          formType: "select",
          options: [
            { label: "Ensino Fundamental", value: "Ensino Fundamental" },
            { label: "Ensino Médio", value: "Ensino Médio" },
            { label: "Ensino Superior", value: "Ensino Superior" }
          ]
        },
        {
          label: "Turma",
          name: "classCode",
          formType: "select",
          required: true,
          validate: required,
          options: classrooms.classes && classrooms.classes
            .map(({ code, name }) => ({
              label: `${code} - ${name}`,
              value: code
            }))
        }
      ]
    },
    {
      label: "Localização",
      fields: [
        { label: "Endereço", name: "address" },
        { label: "Bairro", name: "area" },
        { label: "Cidade", name: "city" },
        { label: "Estado", name: "state" },
        { label: "CEP", name: "cep", pattern: "99999-999" }
      ]
    },
    {
      label: "Adicionais",
      fields: [
        { label: "Igreja frequentante", name: "church" },
        { label: "Cargo", name: "role" },
        { label: "Batizado", name: "baptized", formType: "checkbox" },
        { label: "Data de Batismo", name: "baptizedDate", pattern: "99/99/9999" }
      ]
    }
  ]

  const handleSave = mutate => input => {
    return mutate({ variables: { input } })
      .then(() => {
        history.push("/alunos")
        notificate({
          type: "success",
          message: "Aluno adicionado com sucesso"
        })
      })
      .catch(() =>
        notificate({
          type: "danger",
          message: "Ocorreu um erro ao adicionar o aluno"
        })
      )
  }

  return (
    <Mutation mutation={studentsMutation}>
      {mutate => (
        <BaseForm
          data={data}
          title="Adicionar Aluno"
          cancelLink="/alunos"
          onSubmit={handleSave(mutate)}
        />
      )}
    </Mutation>
  )
}

export default withQuery(classroomsQuery)(StudentsCreate)
