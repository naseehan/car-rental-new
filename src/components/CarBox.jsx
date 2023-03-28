import React from 'react'

function CarBox(props) {

  return (
    <div>
         {props.data.map((car) => (
        <table>
           
            <th>${car.price} /rent per Day</th>
            <tr>
                <td>Model</td>
                <td>{car.name}</td>
            </tr>
            <tr>
                <td>Mark</td>
                <td>{car.mark}</td>
            </tr>
            <tr>
                <td>Year</td>
                <td>{car.year}</td>
            </tr>
            <tr>
                <td>Doors</td>
                <td>{car.doors}</td>
            </tr>
            <tr>
                <td>Ac</td>
                <td>{car.air}</td>
            </tr>
            <tr>
                <td>Transmission</td>
                <td>{car.transmission}</td>
            </tr>
            <tr>
                <td>Fuel</td>
                <td>{car.fuel}</td>
            </tr>
           
        </table>
        ) )}
        <button>Reserve Now</button>
    </div>
  )
}

export default CarBox
