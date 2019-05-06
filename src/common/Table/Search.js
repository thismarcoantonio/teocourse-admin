import React, { useState } from "react"
import { Search as SearchIcon, Close } from "@material-ui/icons"
import { IconButton, Input, InputAdornment } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { Form, Field } from "react-final-form"

const useStyles = makeStyles(theme => ({
  input: {
    width: 212,
    borderRadius: 4,
    padding: "1px 11px",
    color: theme.palette.grey[500],
    backgroundColor: theme.palette.common.white
  },
  searchIcon: {
    width: 22,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.common.black
    }
  },
  closeIcon: {
    cursor: "pointer",
    width: 15,
    "&:hover": {
      color: theme.palette.common.black
    }
  }
}))

function Search({ onSearch }) {
  const [search, setSearch] = useState(false)
  const classes = useStyles()

  return (
    <>
      {!search ? (
        <IconButton onClick={() => setSearch(true)}>
          <SearchIcon />
        </IconButton>
      ) : (
        <Form
          onSubmit={onSearch}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="value"
                render={({ input, meta }) => (
                  <Input
                    {...input}
                    disableUnderline
                    placeholder="Pesquisar..."
                    className={classes.input}
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon className={classes.searchIcon} />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment
                        position="end"
                        onClick={() => setSearch(false)}
                      >
                        <Close className={classes.closeIcon} />
                      </InputAdornment>
                    }
                  />
                )}
              />
            </form>
          )}
        />
      )}
    </>
  )
}

export default Search
