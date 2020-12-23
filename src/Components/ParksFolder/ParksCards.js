import React from 'react'
import archesImg from '../../Assets/Carousel/Img/Arches.jpg'
import bryceImg from '../../Assets/Carousel/Img/Bryce.jpg'
import canyonImg from '../../Assets/Carousel/Img/Canyonlands.jpg'
import CapitolImg from '../../Assets/Carousel/Img/Capitol.jpg'
import ZionImg from '../../Assets/Carousel/Img/Zion.jpeg'
import { Card, makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import '../../App.css'

export default function ParkCards() {
  const useStyles = makeStyles(() => ({
    card: {
      width: '250px',
      height: '300px',
      borderRadius: 5
    },
    images: {
      maxHeight: '100%',
      maxWidth: "100%"
    }

  }))

  const classes = useStyles()

  const ParkInfo = [
    {
      name: "Arches National Park",
      website: "https://utah.com/arches-national-park",
      image: archesImg
    },
    {
      name: "Bryce Canyon",
      website: "https://utah.com/bryce-canyon-national-park",
      image: bryceImg
    },
    {
      name: "Canyonlands",
      website: "https://utah.com/canyonlands-national-park",
      image: canyonImg
    },
    {
      name: "Capitol Reef",
      website: "https://utah.com/capitol-reef-national-park",
      image: CapitolImg
    },
    {
      name: "Zion National Park",
      website: "https://utah.com/zion-national-park",
      image: ZionImg
    },

  ]

  //Need to make these able to change dynamically and shuffle inbetween. 
  return (
    <div className="our-parks">
      <Card
        className={classes.card}>
        <img
          className={classes.images}
          src={ParkInfo[0].image}
          alt={ParkInfo[0].name}
        />
        <Typography>
          {ParkInfo[0].name}
        </Typography>
      </Card>
      <Card
        className={classes.card}>
        <img
          className={classes.images}
          src={ParkInfo[1].image}
          alt={ParkInfo[1].name}
        />
        <Typography>
          {ParkInfo[1].name}
        </Typography>
      </Card>
      <Card
        className={classes.card}>
        <img
          className={classes.images}
          src={ParkInfo[2].image}
          alt={ParkInfo[2].name}
        />
        <Typography>
          {ParkInfo[2].name}
        </Typography>
      </Card>
    </div>
  )
}