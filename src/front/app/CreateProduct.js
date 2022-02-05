import React, {useState} from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {createProduct} from '../api/ProductApi'
import {createImage} from '../api/ImageApi'
import Typography from '@mui/material/Typography'


const CreateProduct = (props) => {

  const [product, setProduct] = useState({
    name: '',
    price:''
  })

  const handleChange = name => event => {

    if(name == 'image'){

      const value = event.target.files[0].name

      const formData = new FormData()
      
      const image = event.target.files[0]

      formData.append('image', image)

      createImage(formData, props.token).then(() => {
        setProduct({...product, [name]: value})
      })


    }else{

      const value = event.target.value

      setProduct({...product,  [name]: value})

    }

    
  }


  const clickSubmit = () => {
    
    createProduct(product, props.token).then((data) => {
      setProduct({name: '', price: ''})
    })

  }


  return(
    <div>
      <Grid container 
        spacing={2} 
        padding={2} 
        direction="column"
        >
        <Grid item>
          <label htmlFor="contained-button-file">
            <input accept="image/*" onChange={handleChange('image')} 
                  id="contained-button-file" type="file" hidden/>
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </Grid>
        <Grid item>
          <Typography>
            {product.image}
          </Typography>
        </Grid>
        <Grid item>
          <TextField value={product.name} onChange={handleChange('name')} id="standard-basic" label="Name" variant="outlined"/>
        </Grid>
        <Grid item>
          <TextField value={product.price} onChange={handleChange('price')} id="standard-basic" label="Price" variant="outlined"/>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={clickSubmit}>Enviar</Button>
        </Grid> 
      </Grid>
    </div>
  )
}

export default CreateProduct
