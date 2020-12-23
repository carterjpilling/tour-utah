import React from 'react'
import { Card, makeStyles } from '@material-ui/core'
import CardMedia from '@material-ui/core/CardMedia'
import saltPic from '../Assets/Featured/utah-great-salt-lake.jpg'
import CardActionArea from '@material-ui/core/CardActionArea'

export default function Featured() {
  const useStyles = makeStyles(() => ({
    card: {
      borderRadius: 5,
      height: '200px',
      width: '150px'
    },
    images: {
      maxHeight: '200px'
    },
    container: {
      widows: '100%',
      height: '2000px',
      backgroundColor: 'blue',
      display: 'flex'
    }
  }))
  const classes = useStyles()


  const data = [
    {
      title: "Great Salt Lake",
      image: saltPic,
      // link: "https://utah.com/great-salt-lake-state-park"
    },
    {
      title: "Park City",
      image: '../Assets/Featured/utah-great-salt-lake.jpg',
      link: "https://utah.com/park-city"
    },
    {
      title: "Dinosaur National Monument",
      image: '../Assets/Featured/dinosaur.jpg',
      link: "https://www.nps.gov/dino/index.htm"
    },
    {
      title: "Mountain Biking",
      image: '../Assets/Featured/biking.jpg',
      link: "https://www.visitutah.com/articles/top-mtb-trails-utah"
    },
    {
      title: "Salt Lake City",
      image: '../Assets/Featured/salt-lake-skyline.jpg',
      link: "https://utah.com/salt-lake-city"
    },
    {
      title: "St. George",
      image: '../Assets/Featured/st-george.jpg',
      link: "https://utah.com/st-george"
    },
    {
      title: "Sundance and the Sundance Film Festival",
      image: '../Assets/Featured/sundance.jpg',
      link: "https://www.sundance.org/"
    },
    {
      title: "Provo",
      image: '../Assets/Featured/provo.jpg',
      link: "https://utah.com/provo"
    }
  ]

  const featuredCards = data.map((e, i) => {
    console.log(e.image)
    return (
      <Card key={i} className={classes.card}>
        <CardActionArea>
          <img src={e.image} alt={e.title} />
          <h1>{e.title}</h1>
        </CardActionArea>

      </Card>
    )
  })

  return (
    <div className={classes.container}>
      {featuredCards}
    </div>
  )
}