import React, {useState} from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {signIn} from '../api/UserApi'
import {Redirect} from 'react-router'
import { Typography } from '@mui/material'

const SignIn = (props) => {

  const [user, setUser] = useState({
    name: '',
    password: ''
  })

  const [redirect, setRedirect] = useState(false)
  
  const [done, setDone] = useState(false)

  const handleChange = name => event => {

    setUser({...user,  [name]: event.target.value })

  }

  const clickSubmit = () => {

    signIn(user).then((data) => {

      if (data != null && typeof window != "undefined"){
        sessionStorage.setItem('jwt', JSON.stringify(data))
        if(props.location.state != undefined){
          setRedirect(true)
        }else{
          setUser({name: '', password: ''})
          setDone(true)
        }
      }else{
        setUser({name: '', password: ''})
      }
    })

  }

  return(
    <div>
      {redirect &&
        (<Redirect to={props.location.state.from.pathname}/>)}
      {props.token || done ? 
        <Typography>La sesion esta activa</Typography> :
        (<Grid container 
          spacing={2} 
          padding={2} 
          direction="column"
          >
          <Grid item>
            <TextField value={user.name} onChange={handleChange('name')} id="standard-basic" label="Name" variant="outlined"/>
          </Grid>
          <Grid item>
            <TextField value={user.password} onChange={handleChange('password')} id="standard-basic" label="Password" variant="outlined"/>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={clickSubmit}>Enviar</Button>
          </Grid> 
        </Grid>)
      }
    </div>
  )

}
export default SignIn