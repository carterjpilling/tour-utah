import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Cards from './Cards'

function CarouselComponent() {




  return (
    <div>
      <Carousel
        next={() => { console.log('Next') }}
        prev={() => { console.log('Prev') }}>
        <Cards />
      </Carousel>
    </div>
  )
}

export default CarouselComponent