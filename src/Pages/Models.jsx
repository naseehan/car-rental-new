import React from 'react'
import HeroPages from '../components/HeroPages'
import "../stylePages/modelsStyles/App.css"
import bmw from "../images/models/bmw4.jpg"
import lotus1 from "../images/models/lotus1.jpg"
import mustangGT from "../images/models/mustangGT.webp"
import lambo from "../images/models/hurracane.avif"
import ferrari from "../images/models/laFerrari.jpg"
import Banner from '../components/Banner'

function Models() {
  return (
    <container className="model-container">
        <HeroPages name="Vehicle Models"/>
        <div className="container">
            <div className="model-cars">
                <div className="each-car">
                    <div className="car-img">
                        <img src={bmw} alt="" />
                    </div>
                    <div className="car-model-text">
                        <span className='car-name'>
                            <h2>BMW 4</h2>
                            <div className="rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            </div>
                            <p>BMW</p>
                            <p>Manuel</p>
                        </span>
                        <span className='car-rate'>
                            <h2>$100</h2>
                            <p>per day</p>
                            <p>4/5</p>
                            <p>Diesel</p>
                        </span>
                    </div>
                    <hr />
                    <button>Book Ride</button>
                </div>


                <div className="each-car">
                    <div className="car-img">
                        <img src={mustangGT} alt="" />
                    </div>
                    <div className="car-model-text">
                    <span className='car-name'>
                            <h2>Mustang GT</h2>
                            <div className="rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            </div>
                            <p>Mustang</p>
                            <p>Manuel</p>
                        </span>
                        <span className='car-rate'>
                            <h2>$150</h2>
                            <p>per day</p>
                            <p>4/5</p>
                            <p>Petrol </p>
                        </span>
                    </div>
                    <hr />
                    <button>Book Ride</button>
                </div>


                <div className="each-car">
                    <div className="car-img">
                        <img src={lotus1} alt="" />
                    </div>
                    <div className="car-model-text">
                    <span className='car-name'>
                            <h2>Lotus Elise</h2>
                            <div className="rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            </div>
                            <p>Lotus</p>
                            <p>Manuel</p>
                        </span>
                        <span className='car-rate'>
                            <h2>$200</h2>
                            <p>per day</p>
                            <p>4/5</p>
                            <p>Petrol</p>
                        </span>
                    </div>
                    <hr />
                    <button>Book Ride</button>
                </div>


                <div className="each-car">
                    <div className="car-img">
                        <img src={lambo} alt="" />
                    </div>
                    <div className="car-model-text">
                    <span className='car-name'>
                            <h2>Hurracane</h2>
                            <div className="rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            </div>
                            <p>Lamborghini</p>
                            <p>Manuel</p>
                        </span>
                        <span className='car-rate'>
                            <h2>$200</h2>
                            <p>per day</p>
                            <p>4/5</p>
                            <p>Petrol </p>
                        </span>
                    </div>
                    <hr />
                    <button>Book Ride</button>
                </div>



                <div className="each-car">
                    <div className="car-img">
                        <img src={ferrari} alt="" />
                    </div>
                    <div className="car-model-text">
                    <span className='car-name'>
                            <h2>LaFerrari</h2>
                            <div className="rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            </div>
                            <p>Ferrari</p>
                            <p>Manuel</p>
                        </span>
                        <span className='car-rate'>
                            <h2>$300</h2>
                            <p>per day</p>
                            <p>4/5</p>
                            <p>Petrol </p>
                        </span>
                    </div>
                    <hr />
                    <button>Book Ride</button>
                </div>



            </div>
        </div>
        <Banner />
    </container>
  )
}

export default Models