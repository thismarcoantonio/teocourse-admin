import React from "react"
import Form from "./Form"
import loginMutation from "./loginMutation"
import { makeStyles } from "@material-ui/styles"
import { Paper, Typography } from "@material-ui/core"
import { Mutation } from "react-apollo"

const useStyles = makeStyles(({ palette, ...theme }) => ({
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative"
  },
  leftContainer: {
    top: 0,
    left: 0,
    width: "30%",
    height: "100%",
    position: "absolute",
    zIndex: -1,
    backgroundColor: palette.primary.main
  },
  wrapper: {
    marginTop: -64,
    marginLeft: 150,
    padding: 32
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    fontWeight: theme.fontWeight.bold
    // color: theme.palette.primary.main
  }
}))

function LoginPage({ onLogin }) {
  const classes = useStyles()

  const handleSubmit = mutate => variables => {
    return mutate({ variables })
      .then(onLogin)
  }

  return (
    <Mutation mutation={loginMutation}>
      {mutate => (
        <div className={classes.container}>
          <div className={classes.leftContainer} />
          <Paper className={classes.wrapper}>
            <Typography variant="h1" className={classes.title}>
              Seminário Teologico Cristão
            </Typography>
            <Form onSubmit={handleSubmit(mutate)} />
          </Paper>
        </div>
      )}
    </Mutation>
  )
}

export default LoginPage
