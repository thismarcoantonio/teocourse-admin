import React from "react"
import { TableHead, TableRow, TableCell } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: 12,
    fontWeight: theme.fontWeight.regular
  }
}))

function Head({ elements = [], onEdit, onRemove }) {
  const classes = useStyles()
  const [headings] = elements

  return (
    <TableHead>
      <TableRow>
        {headings.map(element => (
          <TableCell className={classes.heading} key={element.slug}>
            {element.label}
          </TableCell>
        ))}

        {onEdit && <TableCell />}
        {onRemove && <TableCell />}
      </TableRow>
    </TableHead>
  )
}

export default Head
