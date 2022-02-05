import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import {readOrder} from '../api/OrderApi'
import Bar from './Bar'

const Order = (props) => {

  const [order, setOrder] = useState({
    product: []
  })

  useEffect(() => {

    const params = props.match.params

    readOrder(params).then((data) => {
      sessionStorage.setItem('order', JSON.stringify(data))
      setOrder(data)
    })

  }, [])

  return(
    <div>
      <Bar/>
      <Grid container spacing={1} paddingTop={1}>
        <Grid item xs={12} sm={5} md={4} lg={3}>
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
                      {item.quantity}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={5} md={4} lg={3}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Id</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">
                    {order._id}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={5} md={4} lg={3}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Telefono</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">
                    {order.phone}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={5} md={4} lg={3}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Dirección</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">
                    {order.address}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  )

}

export default Order