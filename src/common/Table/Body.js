import React from "react"
import { Edit } from "@material-ui/icons"
import { makeStyles } from "@material-ui/styles"
import { Button, TableBody, TableRow, TableCell } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  icon: {
    width: 18,
    marginRight: 5
  }
}))

function Body({ rows = [], onEdit, onRemove }) {
  const classes = useStyles()

  return (
    <TableBody>
      {rows.map((cells, index) => (
        <TableRow key={index}>
          {cells.map(cell => (
            <TableCell key={cell.slug}>{cell.value}</TableCell>
          ))}

          {onEdit && (
            <TableCell padding="checkbox">
              <Button onClick={onEdit(index)}>
                <Edit className={classes.icon} />
                Editar
              </Button>
            </TableCell>
          )}
        </TableRow>
      ))}
    </TableBody>
  )
}

export default Body
