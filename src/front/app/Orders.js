import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid'
import {readOrders} from '../api/OrderApi'
import {Redirect} from 'react-router'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import OrderRow from './OrderRow'
import OrderList from './OrderList'
import useMediaQuery from '@mui/material/useMediaQuery'
import List from '@mui/material/List'


const Orders = (props) => {

  const [orders, setOrders] = useState([])

  const desktop = useMediaQuery('(min-width:600px)')

  useEffect(() => {

    readOrders(props.token).then((data) => {
      setOrders(data)
    })

  }, [])


  return(
    <div>
      {orders[0] && desktop &&
      (
        <Grid container>
          <Grid item>
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell/>
                    <TableCell/>
                    <TableCell align="center">Id</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Address</TableCell>
                    <TableCell align="center">Phone</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <OrderRow key={order._id} order={order} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      )}
      {orders[0] && !desktop &&
      (
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {orders.map((order) => {

            return (
              <OrderList key={order._id} order={order}/>
            )
            })}
        </List>
      )}
    </div>
  )
}

export default Orders
