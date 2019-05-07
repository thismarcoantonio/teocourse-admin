import React from "react"
import { Field } from "react-final-form"
import { makeStyles } from "@material-ui/styles"
import { TextField, FormControl, FormHelperText } from "@material-ui/core"
import formatString from "format-string-by-pattern"

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    marginBottom: 26
  },
  error: {
    color: theme.palette.danger
  }
}))

function FormField({
  name,
  type = "text",
  label,
  validate,
  required,
  pattern,
  className
}) {
  const classes = useStyles()

  const format = value => {
    if (!pattern) return value
    const allowNumbers = value.replace(/[^\d]/g, "")
    return formatString(pattern, allowNumbers)
  }

  return (
    <Field
      name={name}
      type={type}
      parse={format}
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
            label={label}
            required={required}
            InputLabelProps={{
              classes: { asterisk: classes.error }
            }}
          />
          {meta.error && meta.touched && (
            <FormHelperText className={classes.error}>
              {meta.error}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  )
}

export default FormField
