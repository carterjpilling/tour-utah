import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


function NavBar() {

  return (
    <div>
      <AppBar position='static'>
        <ToolBar>
          <Typography>
            Welcome to Utah!
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  )
}

export default NavBar 