import React, { useState } from 'react'
import BMW from "../cars/bmw.png"
import mustang from "../cars/mustang.png"
import lambo from "../cars/lambo.png"
import lotus from "../cars/lotus.png"
import ferrari from "../cars/ferrari.png"
import { CAR_DATA } from './carData'
import CarBox from './CarBox'

function CarModels() {

  const[car, setCar] = useState(mustang)

  const[carDetails, setCarDetails] = useState(CAR_DATA[1])
// console.log(carDetails[0][0].name);
  return (
    <section className='pick-section'>
      <div className="container">
        <div className="headings-car">
          <h4>Vehicle Models</h4>
          <h1>Our rental fleet</h1>
          <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
        </div>
        <div className="car-models">
          <div className="car-names">
            <button onClick={ () => {
              setCar(mustang)
              // value of carDetails state change to this when clicking and it is updated to carbox component
              setCarDetails(CAR_DATA[1])
            }} >Mustang</button>
            <button onClick={ () => {
              setCar(BMW)
              setCarDetails(CAR_DATA[0])
            }}>BMW</button>
            <button onClick={ () => {
              setCar(lotus)
              setCarDetails(CAR_DATA[2])
            }}>Lotus</button>
            <button onClick={ () => {
              setCar(ferrari)
              setCarDetails(CAR_DATA[4])
            }}>Ferrari</button>
            <button onClick={ () => {
              setCar(lambo)
              setCarDetails(CAR_DATA[3])
            }}>Lamborghini</button>
          </div>
          <div className='car-model-image'>
            <img src={car} alt="" />
          </div>


          <div className='car-details car-model-details'>
            
{/* car box */}

          <CarBox data={carDetails}/>

          </div>
        </div>





      </div>
    </section>
  )
}

export default CarModels
