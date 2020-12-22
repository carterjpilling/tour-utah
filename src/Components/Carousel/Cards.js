import React from 'react'
import { Card, makeStyles } from '@material-ui/core'
import PictureOne from '../../Assets/Carousel/Img/Pic1.jpg'
import PictureTwo from '../../Assets/Carousel/Img/Pic2.jpg'
import PictureThree from '../../Assets/Carousel/Img/Pic3.jpg'
import PictureFour from '../../Assets/Carousel/Img/Pic4.jpg'

export default function Cards(props) {
  const useStyles = makeStyles(() => ({
    card: {
      borderRadius: 5,
      height: '500px'
    },
    images: {
      maxHeight: '500px'
    }
  }))

  const images = [
    { src: PictureOne },
    { src: PictureTwo },
    { src: PictureThree },
    { src: PictureFour }
  ]
  const classes = useStyles()




  return (
    <div>
      <Card className={classes.card}>
        <img className={classes.images} src={images[props.index].src} alt="Utah Cards" />
      </Card>
    </div>
  )
}