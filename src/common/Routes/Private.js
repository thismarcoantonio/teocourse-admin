import React from "react"
import Header from "common/Header"
import { makeStyles } from "@material-ui/styles"
import { Route, Switch, Redirect } from "react-router-dom"
import Dashboard from "pages/Dashboard"
import Users from "pages/Users"
import Classrooms from "pages/Classrooms"
import ClassroomsCreate from "pages/ClassroomsCreate"
import Students from "pages/Students"
import StudentsCreate from "pages/StudentsCreate"

const useStyles = makeStyles({
  main: {
    width: "94%",
    maxWidth: 1200,
    margin: "100px auto"
  }
})

function PrivateRoutes() {
  const classes = useStyles()

  return (
    <main className={classes.main}>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/usuarios" component={Users} />
        <Route path="/turmas" component={Classrooms} exact />
        <Route path="/turmas/criar" component={ClassroomsCreate} />
        <Route path="/alunos" component={Students} exact />
        <Route path="/alunos/criar" component={StudentsCreate} />
        <Redirect to="/" />
      </Switch>
    </main>
  )
}

export default PrivateRoutes
