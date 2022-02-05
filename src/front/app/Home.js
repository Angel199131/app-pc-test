import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router'
import Grid from '@mui/material/Grid'
import ProductCard from './ProductCard'
import {readProducts} from '../api/ProductApi'
import {createOrder, updateOrder} from '../api/OrderApi'
import Bar from './Bar'

const Home = () => {

  const [order, setOrder] = useState({
    product: [],
    _id: ''
  })

  const [products, setProducts] = useState([])

  const [first, setFirst] = useState(false)

  const [second, setSecond] = useState(false)

  const [product, setProduct] = useState({})

  const [redirect, setRedirect] = useState(false)

  const clickSubmit = (item) => {

    setProduct(item)

    if(order._id == ''){

      setFirst(true)

    }else{

      setSecond(true)

    }

  }

  useEffect(() => {

    if(second){

      var item = product

      if (order.quantity == null){

        order.quantity = 0

      }

      if (order.price == null){

        order.price = 0

      }

      if (item.quantity == null){

        item.quantity = 0

      }


      const i = order.product.findIndex(itemA => itemA._id == item._id)

      if(i == -1){

        item.quantity = item.quantity + 1

        order.product.push(item)
        
      }else{

        order.product[i].quantity = order.product[i].quantity + 1

      }

      order.quantity = order.quantity + 1

      order.price = order.price + item.price

      
      updateOrder(order).then((data) => {
        sessionStorage.setItem('order', JSON.stringify(data))
        setOrder(data)
        setSecond(false)
      })
    }

  }, [second])


  useEffect(() => {

    if(first){

      createOrder().then((data) => {
        setOrder(data)
        setSecond(true)
      })

    }

  }, [first])


  useEffect(() => {

    readProducts().then((data) => {

      setProducts(data)

    })

  }, [])

  useEffect(() => {

    const aux = JSON.parse(sessionStorage.getItem('order'))

    if(aux != null){

      setOrder(aux)

      if(aux.phone){
        setRedirect(true)
      }

    }

  }, [])


  return(
    <div>
      {redirect && (<Redirect to={"/order/" + order._id}/>)}
      <Bar/>
      <Grid container spacing={2} padding={2}>
        {products.map((item, i) => {
          return(
            <Grid item key={i} xs={6} sm={4} md={3} lg={2}>
              <ProductCard item={item} onClick={() => clickSubmit(item)}/>
            </Grid>
          )
          })
        }
      </Grid>
    </div>
  )
}

export default Home