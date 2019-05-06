import React from "react"
import cn from "classnames"
import { makeStyles } from "@material-ui/styles"
import { Button as BaseButton } from "@material-ui/core"

const useStyles = makeStyles({
  button: {
    boxShadow: "none",
    textTransform: "unset"
  }
})

function Button({ children, type, onClick, className }) {
  const classes = useStyles()

  return (
    <BaseButton
      color="primary"
      onClick={onClick}
      variant="contained"
      type={type || "button"}
      className={cn(classes.button, className)}
    >
      {children}
    </BaseButton>
  )
}

export default Button
