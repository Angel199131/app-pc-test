import React, {useState} from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'


const OrderItem = (props) => {

  const {item} = props

  const [open, setOpen] = useState(false)

  return(
    <div>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText primary={item._id} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" sx={{ pl: 1 }}>
          <ListItemButton>
            <ListItemText primary={item.name} />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary={item.quantity + ' ud'} />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary={item.price + '€/ud'} />
          </ListItemButton>
        </List>
      </Collapse>
    </div>
  )

}

export default OrderItem