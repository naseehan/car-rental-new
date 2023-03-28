import React from 'react'
import operator from "../assets/images/eachSpecs/operator.png"
import selectCar from "../assets/images/eachSpecs/selectCar.png"
import drive from "../assets/images/eachSpecs/drive.png"

function Specs() {
  return (
    <section className='specifications'>
        <div className="container">
            <div className="headings">
                <h4>Plan your trip now</h4>
                <h1>Quick & easy car rental</h1>
            </div>
            <div className="specs">
                <div className='each-spec'>
                    <img src={selectCar} alt="" />
                    <h2>Select Car</h2>
                    <p>We offers a big range of vehicles for all your driving needs. 
                       We have the perfect car to meet your needs
                    </p>
                </div>
                <div className='each-spec'>
                <img src={operator} alt="" />
                    <h2>Contact Operator</h2>
                    <p>Our knowledgeable and friendly operators are always ready 
                        to help with any questions or concerns
                    </p>
                </div>
                <div className='each-spec'>
                <img src={drive} alt="" />
                    <h2 style={{marginTop: "1rem"}}>Let's Drive</h2>
                    <p>Whether you're hitting the open road, we've got you covered 
                        with our wide range of cars
                    </p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Specs
