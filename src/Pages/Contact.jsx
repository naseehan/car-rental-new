import React from 'react'
import Banner from '../components/Banner'
import HeroPages from '../components/HeroPages'
import "../stylePages/contactStyles/App.css"

function Contact() {
  return (
    <section className='contact-section'>
        <HeroPages name="Contact"/>

        <div className="container">
            <div className="info">
                <div className="info-text">
                        <h2>Need additional information?</h2>
                            <p>A multifaceted professional skilled in multiple fields
                                of research, development as well as a learning specialist.
                                Over 15 years of experience.
                            </p>
                            <ul>
                                <li>(123) 456-7869</li>
                                <li>carrental@carmail.com</li>
                                <li>India ,Kerala</li>
                            </ul>
                </div>
                <div className="info-input">
                        <div className='form'>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" name="" id="name" placeholder='E.g:"John Doe"' />
                        </div>
                        <div className='form'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="" id="email" placeholder='youremail@example.com' />
                        </div>
                        <div className='form'>
                            <label htmlFor="tell">Tell us about it</label>
                            <textarea name="" id="tell" cols="30" rows="10">Write here...</textarea>
                        </div>
                        <button>Send Message</button>
                </div>
            </div>
        </div>
        <Banner />
    </section>
  )
}

export default Contact