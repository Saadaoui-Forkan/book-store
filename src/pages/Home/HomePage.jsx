import React from 'react'
import Slider from '../../components/Slider/Slider'
import Services from '../../components/Services/Services'
import HeadingTitle from '../../components/heading-title/HeadingTitle'
import BookSlider from '../../components/book-slider/BookSlider'
import { books } from '../../data/books'
function HomePage() {
  return (
    <div className='home'>
        <Slider />
        <Services />
        <HeadingTitle title="most gifted" />
        <BookSlider data={books}/>
        <HeadingTitle title="best seller" />
        <BookSlider data={books}/>
        <HeadingTitle title="most wished for" /> 
        <BookSlider data={books}/>
    </div>
    
  )
}

export default HomePage