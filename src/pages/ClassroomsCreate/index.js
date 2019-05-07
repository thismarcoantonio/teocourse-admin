import React from "react"
import BaseForm from "common/BaseForm"
import { Mutation } from "react-apollo"
import { required } from "utils/forms"
import useNotification from "common/NotificationContext"
import classroomsMutation from "./classroomsMutation"

function ClassroomCreate({ history }) {
  const { notificate } = useNotification()
  const data = [
    {
      label: "Dados da Turma",
      fields: [
        {
          label: "Nome da turma",
          name: "name",
          required: true,
          validate: required
        }
      ]
    },
    {
      label: "Localização",
      fields: [
        { label: "Endereço", name: "address" },
        { label: "Bairro", name: "area" },
        { label: "Cidade", name: "city" },
        { label: "Estado", name: "state" }
      ]
    }
  ]

  const handleSave = mutate => input => {
    return mutate({ variables: { input } })
      .then(() => {
        history.push("/turmas")
        notificate({
          type: "success",
          message: "Turma salva com sucesso"
        })
      })
      .catch(() =>
        notificate({
          type: "danger",
          message: "Ocorreu um erro ao salvar a turma"
        })
      )
  }

  return (
    <Mutation mutation={classroomsMutation}>
      {mutate => (
        <BaseForm
          data={data}
          title="Criar Turma"
          cancelLink="/turmas"
          onSubmit={handleSave(mutate)}
        />
      )}
    </Mutation>
  )
}

export default ClassroomCreate
