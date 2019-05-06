import React from "react"
import { Field } from "react-final-form"
import { makeStyles } from "@material-ui/styles"
import { TextField, FormControl, FormHelperText } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    marginBottom: 26
  },
  asterisk: {
    color: theme.palette.error.main
  }
}))

function FormField({
  name,
  type = "text",
  label,
  validate,
  required,
  className
}) {
  const classes = useStyles()

  return (
    <Field
      name={name}
      type={type}
      validate={validate}
      render={({ input, meta }) => (
        <FormControl
          className={classes.container}
          error={!!meta.error && !meta.pristine}
        >
          <TextField
            {...input}
            id={name}
            type={type}
            placeholder={label}
            required={required}
          />
          {!!meta.error && !meta.pristine && (
            <FormHelperText>{meta.error}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  )
}

export default FormField
