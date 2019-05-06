import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Form } from "react-final-form"
import FormField from "common/FormField"
import Button from "common/Button"

const useStyles = makeStyles({
  button: {
    display: "block",
    marginLeft: "auto"
  }
})

function LoginForm({ onSubmit }) {
  const classes = useStyles()

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormField
            name="email"
            label="Usuário"
          />
          <FormField
            name="password"
            label="Senha"
            type="password"
          />
          <Button type="submit" className={classes.button}>ENTRAR</Button>
        </form>
      )}
    />
  )
}

export default LoginForm
