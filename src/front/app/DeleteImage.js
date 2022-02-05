import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid'
import {readImages, deleteImage} from '../api/ImageApi'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

const DeleteProduct = (props) => {

  const [images, setImages] = useState([])

  const [remove, setRemove] = useState(false)

  const clickSubmit = (image) => {

    deleteImage(image, props.token).then((data) => {

      setRemove(data)

    })

  }

  useEffect(() => {

    readImages().then((data) => {

      setImages(data)
      setRemove(false)

    })

  }, [remove])

  return(
    <div>
      <Grid container spacing={2} padding={2}>
        {images.map((image, i) => {
          return(
            <Grid item key={i} xs={6} sm={4} md={3} lg={2}>
              {/* <ProductCard item={item} onClick={() => clickSubmit(item)}/> */}
              <Link component="button" onClick={() => clickSubmit(image)} underline="none">
                <Card>
                  <CardMedia
                    component="img"
                    // height="120"
                    image={'/api/images/' + image}
                  />
                </Card>
              </Link>
            </Grid>
          )
          })
        }
      </Grid>
    </div>
  )
}

export default DeleteProduct