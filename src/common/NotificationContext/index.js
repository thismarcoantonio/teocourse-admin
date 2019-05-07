import React, { useState, useContext, createContext } from "react"
import { makeStyles } from "@material-ui/styles"
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core"
import { Close, CheckCircle, Warning, Error as ErrorIcon } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  snackbar: {
    backgroundColor: p => theme.palette[p.type]
  },
  close: {
    color: theme.palette.common.white
  },
  icon: {
    fontSize: 20,
    marginRight: 10
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}))

const NotificationContext = createContext({})

export function NotificationProvider({ children }) {
  const { Provider } = NotificationContext
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState(null)
  const [notificationType, setNotificationType] = useState(null)
  const classes = useStyles({ type: notificationType })

  const notificate = ({ type, message }) => {
    setVisible(true)
    setMessage(message)
    setNotificationType(type)
    return null
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return
    setVisible(false)
    setMessage(null)
    setNotificationType(null)
  }

  const variantIcon = {
    success: CheckCircle,
    warning: Warning,
    danger: ErrorIcon
  }

  const Icon = variantIcon[notificationType]

  return (
    <Provider value={{ notificate }}>
      <Snackbar
        open={visible}
        onClose={handleClose}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <SnackbarContent
          message={
            <span className={classes.message}>
              {Icon && <Icon className={classes.icon} />}
              {message}
            </span>
          }
          className={classes.snackbar}
          action={
            <IconButton onClick={handleClose} className={classes.close}>
              <Close />
            </IconButton>
          }
        />
      </Snackbar>
      {children}
    </Provider>
  )
}

export default () => useContext(NotificationContext)
