import React from "react"
import { Field } from "react-final-form"
import { makeStyles } from "@material-ui/styles"
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    marginBottom: 26
  },
  error: {
    color: theme.palette.danger
  }
}))

function FormSelect({ name, label, options, required, validate }) {
  const classes = useStyles()

  return (
    <Field
      name={name}
      validate={validate}
      render={({ input, meta }) => (
        <FormControl
          required={required}
          className={classes.container}
          error={!!meta.error && !meta.pristine}
        >
          <InputLabel
            classes={{ asterisk: classes.error }}
            htmlFor={name}
          >{label}</InputLabel>
          <Select
            {...input}
            id={name}
            required={required}
          >
            {options && options.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {!!meta.error && !meta.pristine && (
            <FormHelperText>{meta.error}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  )
}

export default FormSelect
