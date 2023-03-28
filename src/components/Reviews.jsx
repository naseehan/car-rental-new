import React from 'react'
import mammootty from "../assets/images/reviews/mammootty.jpg"
import mohanlal from "../assets/images/reviews/mohanlal.jpg"

function Reviews() {
  return (
    <section className='reviews-section'>
        <div className="container">
            <div className="full-review">
                <div className="review-heading headings-car">
                    <h4>Reviewed by People</h4>
                    <h1>Client's Testimonials</h1>
                    <p>Discover the positive impact we've made on the our clients by reading through their 
                        testimonials. Our clients have experienced our 
                        service and results, and they're eager to share their positive experiences with you.
                    </p>
                </div>
                <div className="testimonials">
                    <div className='personal-review'>
                            <p>"We rented a car from this website and had an amazing 
                                experience! The booking was easy and the rental rates were very affordable. "
                            </p>
                       <div className='img-seperation'>
                        <div>
                            <img src={mammootty} alt="" />
                        </div>
                        <div>
                            <p>Michael</p>
                            <h6>Ernakulam</h6>
                        </div>
                       </div>
                    </div>
                    <div className='personal-review'>
                            <p>"The car was in great condition and made our trip even
                                better. Highly recommend for this car rental website!"
                            </p>
                        <div className='img-seperation'>
                            <div>
                                <img src={mohanlal} alt="" />
                            </div>
                            <div>
                                <p>Stephen</p>
                                <h6>Kozhikode</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reviews