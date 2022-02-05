import React, {useState} from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import OrderItem from './OrderItem'
import {Checkbox} from '@mui/material'
import {updateOrder} from '../api/OrderApi'


const OrderList = (props) => {

  const [open, setOpen] = useState(false)

  const [order, setOrder] = useState(props.order)

  const handleChange = (e, auxOrder) => {

    auxOrder.checked = e.target.checked

    updateOrder(auxOrder).then((data) => {
      sessionStorage.setItem('order', JSON.stringify(data))
      setOrder(data)
    })

  }

            
  return (
    <div>
        <ListItem disablePadding>
          <ListItemIcon>
            <Checkbox checked={order.checked} onChange={(e) => handleChange(e, order)}/>
          </ListItemIcon>
          <ListItemButton sx={{ pl: 0 }} onClick={() => setOpen(!open)}>
            <ListItemText primary={order._id}/>
          </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemText primary={order.quantity + ' ud'} />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary={order.price + '€'} />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary={order.phone} />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary={order.address} />
            </ListItemButton>
            {order.product.map((item) => {
              
              return (
                <div key={item._id}>

                  <OrderItem item={item} />

                </div>
              )
            })}
          </List>
        </Collapse>
    </div>
  )

}

export default OrderList