import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Products from '../Products/Products'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Testimonials from '../Testimonials/Testimonials'
import Newsletter from '../Newsletter/Newsletter'
import FestivalHighlight from '../FestivalHighlight/FestivalHighlight'
import ProjectFeedback from '../ProjectFeedback/ProjectFeedback'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Values/>
      <Products/>
      <WhyChooseUs/>
      <Testimonials/>
      <Newsletter/>
      <FestivalHighlight/>
      <ProjectFeedback/>
    </div>
  )
}

export default Home
