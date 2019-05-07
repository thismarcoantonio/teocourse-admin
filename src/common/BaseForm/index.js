import React from "react"
import FormField from "common/FormField"
import FormSelect from "common/FormSelect"
import Button from "common/Button"
import { Form } from "react-final-form"
import { makeStyles } from "@material-ui/styles"
import { Typography } from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  wrapper: {
    maxWidth: 768,
    width: "50%",
    margin: "0 auto",
    paddingTop: 32,
    color: theme.palette.common.black
  },
  title: {
    fontWeight: 300,
    fontSize: 32
  },
  subtitle: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 62
  },
  mark: {
    color: theme.palette.danger
  },
  block: {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    marginBottom: 32
  },
  subHeader: {
    fontSize: 14,
    marginTop: 5,
    textTransform: "Uppercase"
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end"
  },
  cancelButton: {
    marginRight: 10,
    color: theme.palette.common.dark
  },
  submitButton: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.dark
  }
}))

function BaseForm({ onSubmit, cancelLink, title, data }) {
  const classes = useStyles()
  const getFormComponent = type => {
    const types = {
      select: FormSelect,
      input: FormField,
      checkbox: FormField
    }

    return types[type] || types.input
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, invalid, pristine }) => (
        <form className={classes.wrapper} onSubmit={handleSubmit} noValidate>
          <Typography className={classes.title} variant="h1">
            {title}
          </Typography>
          <Typography className={classes.subtitle}>
            Campos obrigatórios <span className={classes.mark}>*</span>
          </Typography>

          {data.map(item => (
            <div className={classes.block} key={item.label}>
              <h2 className={classes.subHeader}>{item.label}</h2>
              <div>
                {item.fields.map(field => {
                  const FormComponent = getFormComponent(field.formType)
                  return (
                    <FormComponent key={field.name} {...field} />
                  )
                })}
              </div>
            </div>
          ))}

          <div className={classes.footer}>
            {cancelLink && (
              <Button
                color="default"
                variant="text"
                to={cancelLink}
                component={Link}
                className={classes.cancelButton}
              >Cancelar</Button>
            )}
            <Button
              type="submit"
              disabled={invalid || pristine}
              className={classes.submitButton}
            >Salvar</Button>
          </div>
        </form>
      )}
    />
  )
}

export default BaseForm
