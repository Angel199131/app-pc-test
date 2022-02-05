import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home'
import CreateProduct from './CreateProduct'
import DeleteImage from './DeleteImage'
import SignIn from './SignIn'
import Cart from './Cart'
import Order from './Order'
import Orders from './Orders'
import Tracking from './Tracking'
import PrivateRoute from './PrivateRoute'


const App = () => {

  return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <PrivateRoute path="/createproduct" component={CreateProduct}/>
          <PrivateRoute path="/deleteimage" component={DeleteImage}/>
          <PrivateRoute path="/signin" component={SignIn}/>
          <Route path="/cart/:id" component={Cart}/>
          <Route path="/order/:id" component={Order}/>
          <Route path="/tracking" component={Tracking}/>
          <PrivateRoute path="/orders" component={Orders}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App