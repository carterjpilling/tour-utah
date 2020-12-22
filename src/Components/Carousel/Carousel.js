import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import Cards from './Cards'

function CarouselComponent() {
  const [index, setIndex] = useState(0)

  function nextIndex() {
    if (index === 3) {
      setIndex(0)
    } else {
      let newIndex = (index + 1)
      setIndex(newIndex)
    }
  }

  function prevIndex() {
    if (index === 0) {
      setIndex(3)
    } else {
      let newIndex = (index - 1)
      setIndex(newIndex)
    }
  }

  return (
    <div>
      <Carousel
        next={() => { nextIndex() }}
        prev={() => { prevIndex() }}>
        <Cards index={index} />
      </Carousel>
    </div>
  )
}

export default CarouselComponent