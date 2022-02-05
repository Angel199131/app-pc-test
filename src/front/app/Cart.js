import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import {readOrder, updateOrder} from '../api/OrderApi'
import Bar from './Bar'

const Cart = (props) => {

  const [order, setOrder] = useState({
    product: []
  })

  const [phone, setPhone] = useState('')

  const [address, setAddress] = useState('')

  const [redirect, setRedirect] = useState(false)

  const changeQuantity = (item, e, i) => {

    console.log(e.target.value)

    order.quantity = order.quantity - item.quantity

    order.price = order.price - item.price * item.quantity

    item.quantity = Number.parseInt(e.target.value)

    if(Number.isNaN(item.quantity)){

      item.quantity = 1

    }

    if(item.quantity == 0){

      order.product = order.product.filter(itemA => itemA != item)

    }

    order.quantity = order.quantity + item.quantity

    order.price = order.price + item.price * item.quantity

    updateOrder(order).then((data) => {
      sessionStorage.setItem('order', JSON.stringify(data))
      setOrder(data)
    })

  }


  const clickSubmit = () =>{

    order.address = address
    order.phone = phone

    updateOrder(order).then((data) => {
      sessionStorage.setItem('order', JSON.stringify(data))
      setOrder(data)
      if(data.address && data.phone){
        setRedirect(true)
      }
    })

  }

  useEffect(() => {

    const params = props.match.params

    readOrder(params).then((data) => {
      sessionStorage.setItem('order', JSON.stringify(data))
      setOrder(data)
      if(data.phone){
        setRedirect(true)
      }
    })

    return () => setOrder({})

  }, [redirect])

  return(
    <div>
      {redirect && (<Redirect to={"/order/" + order._id}/>)}
      {order.quantity == 0 && (<Redirect to={"/"}/>)} 
      <Bar/>
      <Grid container spacing={2} paddingTop={1}>
          <Grid item>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Producto</TableCell>
                    <TableCell align="center">Precio</TableCell>
                    <TableCell align="center">Cantidad</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.product.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell align="center">
                        {item.name}
                      </TableCell>
                      <TableCell align="center">
                        {item.price}
                      </TableCell>
                      <TableCell align="center">                        
                        <TextField size="small" defaultValue={item.quantity} onChange={e => changeQuantity(item, e, i)}/>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={2}>
            <Grid item>
                <TextField id="outlined-basic" 
                            value={address} 
                            onChange={e=>setAddress(e.target.value)} 
                            label="Dirección" 
                            variant="outlined" />
              </Grid>
              <Grid item>
                <TextField id="outlined-basic" 
                            value={phone} 
                            onChange={e=>setPhone(e.target.value)} 
                            label="Telefono" 
                            variant="outlined" />
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={clickSubmit}>Enviar</Button>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  Total: {order.price}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </div>
  )

}

export default Cart
