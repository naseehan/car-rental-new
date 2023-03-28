import React, { useEffect, useState } from 'react'
import BMW from "../cars/bmw.png"
import mustang from "../cars/mustang.png"
import lambo from "../cars/lambo.png"
import lotus from "../cars/lotus.png"
import ferrari from "../cars/ferrari.png"
function Booking() {
const [search, setSearch] = useState(false)
const [carType, setCarType] = useState("")
const [date, setDate] = useState()
const [dropDate, setDropDate] = useState()
const [pickupLocation, setPickupLocation] = useState("")
const [dropLocation, setDropLocation] = useState("")
const [carImg, setCarImg] = useState("")
// when user clicks button for serch
const handleClick = (e) =>{
  e.preventDefault();
  // setSearch(true)
  setSearch(!search)
  const modalDiv = document.querySelector(".modal-window")
  modalDiv.scroll(0,0);
  console.log("clicked");
}
// get car model from user
const handleCarType = (e) =>{
  const type= e.target.value;
  setCarType(type)
  setCarImg(type)
}

// set car image when selecting car type
let imgUrl;
switch (carImg){
  case  "Mustang gt" :
    imgUrl = mustang;
  break;
  case "BMW" :
    imgUrl = BMW;
    break;
  case "Lotus":
      imgUrl = lotus;
      break;
  case "Ferrari":
    imgUrl = ferrari;
    break;
  case "Lamborghini":
    imgUrl = lambo;
    break;
default:
  imgUrl= "";
}

// getting pickup date from user
const  pickUpDate = (e) =>{
  const dateValue = e.target.value;
  setDate(dateValue);
}

// getting dropdate from user
const handleDropDate = (e) => {
  const dropValue = e.target.value;
  setDropDate(dropValue) 
}

// get pickup location from user
const handlePickupLocation = (e) => {
  const pickupLoca = e.target.value;
  setPickupLocation(pickupLoca)
}

// get drop location from user
const handleDropLoction = (e) => {
  const dropLocationValue = e.target.value;
  setDropLocation(dropLocationValue)
}
// disable scroll of body when booking window is displayed
useEffect(() =>{
  if(search === true){
    document.body.style.overflow = "hidden"
  }else{
    document.body.style.overflow = "auto"
  }
},[search])



console.log(carType);
  return (
    <>
    <section className='bookingSection'>
    <div
          onClick={handleClick}
          className={`modal-overlay ${search ? "active-window" : ""}`}
        ></div>
    <div className="container">
      <div className="book-content">
      <div className="booking-section">
            <h2>Book a Car</h2>

            <div className="booking-form">
            <form action="">
<div className="car-type form-div">
                    <label htmlFor="carType">Select your Car type</label>
                    <select name="carType" id="carType"  onChange={handleCarType} value={carType} >
                        <option >Select your car type</option>
                        <option value="Mustang gt">Mustang gt</option>
                        <option value="BMW">BMW</option>
                        <option value="Lotus">Lotus</option>
                        <option value="Ferrari">Ferrari</option>
                        <option value="Lamborghini">Lamborghini</option>
                    </select>
                    </div>
{/* pickup location */}
<div className="pickup-location form-div">
                    <label htmlFor="pickLocation">Pick-up</label>
                    <select name="pickLocation" id="pickLocation" onChange={handlePickupLocation}>
                        <option >Select pickup location</option>
                        <option value="Kerala">Kozhikod</option>
                        <option value="TVM">TVM</option>
                        <option value="Ernakulam">Ernakulam</option>
                        <option value="Kollam">Kollam</option>
                        <option value="Kochi">Kochi</option>
                    </select>
                    </div>
{/* drop of location */}
<div className="dropoff-location form-div">
                    <label htmlFor="dropLocation">Drop off</label>
                    <select name="dropLocation" id="dropLocation" onChange={handleDropLoction}>
                        <option >Select drop off location</option>
                        <option value="Kerala">Kozhikod</option>
                        <option value="TVM">TVM</option>
                        <option value="Ernakulam">Ernakulam</option>
                        <option value="Kollam">Kollam</option>
                        <option value="Kochi">Kochi</option>
                    </select>
                    </div>
{/* pick up date */}
<div className="pickup-date form-div">
                    <label htmlFor="pickDate">Pick-up date</label>
                    <input type="date" name="pickDate" id="pickDate" onChange={pickUpDate}/>
                    </div>
{/* drop off date */}
<div className="dropoff-date form-div">
                    <label htmlFor="dropDate">Drop-off date</label>
                    <input type="date" name="dropDate" id="dropDate" onChange={handleDropDate} />
                    </div>
<div className="search-button form-div">
                    <button type='submit' onClick={handleClick}>Search</button>
                    </div>
            </form>
        </div>
        </div>
        </div>
        </div>
        </section>

 {/* modal window */}

{/* have to use the backticks to cover the entire class. single quotes will not work */}
<div className={`modal-window ${search ? "active-window" : ""} `}>
  <div className="modal-heading">
  <h2>COMPLETE RESERVATION</h2>
  <i class="fa-solid fa-x" onClick={handleClick}></i>
  </div>

  <div className="modal-info">
  
  <h4> <i class="fa-solid fa-circle-info"></i> Upon completing this reservation enquiry, you will receive:</h4>
  <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
</div>


 
  <div className="booking-details">
  <div className="location-date">
  <p>LOCATION & DATE</p>
    <div className="modal-locadate">
      <label htmlFor="time" > <i class="fa-solid fa-location-dot"></i> Pick-Up Date & Time</label>
       <p>{date}/ <input className='pickDateInput' type="time" name="" id="time" /></p>        
    </div>

    <div className="modal-locadate">
      <label htmlFor="time" > <i class="fa-solid fa-location-dot"></i> Drop-Off Date & Time</label>
       <p>{dropDate}/ <input className='pickDateInput' type="time" name="" id="time" /></p>        
    </div>

    <div className="modal-locadate">
      <label htmlFor="time" > <i class="fa-solid fa-calendar-days"></i> Pick-Up Location</label>
       <p>{pickupLocation}</p>        
    </div>

    <div className="modal-locadate">
      <label htmlFor="time" ><i class="fa-solid fa-calendar-days"></i> Drop-Off Location</label>
       <p>{dropLocation}</p>        
    </div>

  </div>
  <div className="car-details">
    <h5><span>Car - </span>{carType}</h5>
   {imgUrl && <img src={imgUrl} alt="car_img" /> }
    </div>
</div>


</div>
</>
  )

}

export default Booking