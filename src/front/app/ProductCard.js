import React from 'react'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'


export default function ProductCard(props) {

    return (
      <Link component="button" onClick={props.onClick} underline="none">
        <Card>
          <CardMedia
            component="img"
            // height="120"
            image={props.item.image}
          />
          <CardContent>
            <Typography variant="h6">
              {props.item.name}
            </Typography>
            <Typography variant="h7">
              {props.item.price+ '€'}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    )

}
