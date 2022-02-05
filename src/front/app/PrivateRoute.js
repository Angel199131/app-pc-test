import React from 'react'
import {Route} from 'react-router-dom'
import { Redirect } from 'react-router'

const PrivateRoute = (props) => {

  var aux = {}

  var redirect = false

  if (typeof window != "undefined"){

    aux = JSON.parse(sessionStorage.getItem('jwt'))

  }

  if (aux == null){

    aux = {}

    aux.token = null

    redirect = true

  }

  return(
    redirect && props.location.pathname != '/signin' ? 
    <Redirect to={{
      pathname: '/signin',
      state: { from: props.location }
    }} /> :
    <Route path={props.path} render={(propsA) => <props.component token={aux.token} {...propsA} />} />
    
  )


}

export default PrivateRoute

