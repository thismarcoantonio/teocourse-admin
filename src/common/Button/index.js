import React from "react"
import cn from "classnames"
import { makeStyles } from "@material-ui/styles"
import { Button as BaseButton } from "@material-ui/core"

const useStyles = makeStyles({
  button: {
    boxShadow: "none",
    textTransform: "unset",
    "&:active": {
      boxShadow: "none"
    }
  }
})

function Button({ children, type, className, ...props }) {
  const classes = useStyles()

  return (
    <BaseButton
      color="primary"
      variant="contained"
      type={type || "button"}
      className={cn(classes.button, className)}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

export default Button
