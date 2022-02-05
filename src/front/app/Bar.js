import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'
import Link from '@mui/material/Link'
import SearchIcon from '@mui/icons-material/Search'


export default function ButtonAppBar() {

  var order = JSON.parse(sessionStorage.getItem('order'))

  return(
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/" color="inherit" underline="none">
                PC
              </Link>
            </Typography>
            <Link href={"/tracking"} color="inherit">
              <IconButton color="inherit" size="large">
                <SearchIcon/>
              </IconButton>
            </Link>
            {order && <Link href={"/cart/" + order._id} color="inherit">
              <IconButton size="large" color="inherit">
                <Badge badgeContent={order.quantity} color="error">
                  <ShoppingCartIcon/>
                </Badge>
              </IconButton>
            </Link>}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

