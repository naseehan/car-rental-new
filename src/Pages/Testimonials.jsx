import React from 'react'
import Banner from '../components/Banner'
import HeroPages from '../components/HeroPages'
import Reviews from '../components/Reviews'
function Testimonials() {
  return (
    <section className="testimonials-section">
        <HeroPages name="Testimonials"/>

        <Reviews />
<Banner />
            
    </section>
  )
}

export default Testimonials