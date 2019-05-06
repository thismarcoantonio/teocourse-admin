import React from "react"
import { makeStyles } from "@material-ui/styles"
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: theme.palette.primary.dark
  },
  title: {
    fontSize: 18,
    color: theme.palette.common.white,
    fontWeight: theme.fontWeight.bold
  },
  actions: {
    marginLeft: "auto"
  },
  buttonLink: {
    color: theme.palette.primary.light,
    "&.active": {
      color: theme.palette.common.white
    }
  },
  button: {
    fontSize: 14,
    marginRight: 10,
    fontWeight: theme.fontWeight.bold,
    color: "inherit"
  }
}))

function Header() {
  const classes = useStyles()
  const pages = [
    { label: "Usuários", path: "/usuarios" },
    { label: "Turmas", path: "/turmas" },
    { label: "Alunos", path: "/alunos" }
  ]

  return (
    <AppBar className={classes.wrapper}>
      <Toolbar>
        <Typography className={classes.title}>Painel Administrativo</Typography>
        <div className={classes.actions}>
          {pages.map(page => (
            <NavLink key={page.label} to={page.path} className={classes.buttonLink}>
              <Button className={classes.button}>
                {page.label}
              </Button>
            </NavLink>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
