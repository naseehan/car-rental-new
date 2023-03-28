import React from 'react'

function Footer() {
  return (
    <footer className='footer-content'>
        <div className="container">
            <div className="footer-data">
                <div className="footer-column1 foo-col">
                    <ul>
                    <h6>CAR <span>Rental</span></h6>
                    <p>We offers a big range of vehicles for all your driving needs.
                       We have the perfect car to meet your needs.
                    </p>
                    <li> (123) -456-789</li>
                    <li>carrental@gmail.com</li>
                    <p>Created by <a href="https://naseehan.github.io/My-resume/">Naseeh AN</a></p>
                    </ul>
                </div>
                <div className="footer-column2 foo-col">
                    <ul>
                    <h6>COMPANY</h6>
                        <li>Canada</li>
                        <li>Careers</li>
                        <li>Mobile</li>
                        <li>Blog</li>
                        <li>How we work</li>
                    </ul>
                </div>
                <div className="footer-column3 foo-col">
                    <ul>
                        <h6> WORKING HOURS</h6>
                   
                    <li>Mon - Fri: 9:00AM - 9:00PM</li>
                    <li>Sat: 9:00AM - 19:00PM</li>
                    <li>Sun: Closed</li>
                    </ul>
                </div>
                <div className="footer-column4 foo-col">
                    <ul>
                    <h6>SUBSCRIPTION</h6>
                <li>Subscribe your Email address for latest news & updates.</li>
                <li><input type="text" name="" id=""  placeholder='Enter Your Email'/></li>
                <li><button>Submit</button></li>
                </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer