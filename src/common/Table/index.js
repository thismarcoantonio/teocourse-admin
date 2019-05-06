import React from "react"
import Head from "./Head"
import Body from "./Body"
import Search from "./Search"
import { makeStyles } from "@material-ui/styles"
import { Paper, Toolbar, Table as BaseTable, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  toolbar: {
    backgroundColor: theme.palette.grey[100]
  },
  title: {
    fontSize: 18,
    marginRight: "auto",
    fontWeight: theme.fontWeight.regular
  },
  emptyState: {
    padding: 20,
    color: theme.palette.grey[500]
  }
}))

function Table({ title, values, onSearch, onEdit, onRemove, emptyState }) {
  const classes = useStyles()
  const isEmpty = !values || !values.length

  return (
    <Paper>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h1" className={classes.title}>
          {title}
        </Typography>
        {onSearch && !isEmpty && <Search onSearch={onSearch} />}
      </Toolbar>
      <BaseTable>
        {isEmpty && <Body className={classes.emptyState}>{emptyState}</Body>}
        {!isEmpty && <Head elements={values} onEdit={onEdit} />}
        {!isEmpty && <Body rows={values} onEdit={onEdit} />}
      </BaseTable>
    </Paper>
  )
}

export default Table
