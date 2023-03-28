import React, { useState } from 'react'

function FAQ() {


const [answer, setAnswer] = useState(true)

const [secondAnswer, setSecondAnswer] = useState(false)

const [thirdAnswer, setThirdAnswer] = useState(false)

const handleAnswer = () => {
    setAnswer(!answer)
    setSecondAnswer(false)
    setThirdAnswer(false)
}
const handleSecondAnswer = () => {
    setSecondAnswer(!secondAnswer)
    setAnswer(false)
    setThirdAnswer(false)
}
const handleThirdAnswer = () => {
    setThirdAnswer(!thirdAnswer)
    setSecondAnswer(false)
    setAnswer(false)
}

  return (
    <section className='faq-section'>
        <div className="container">
            <div className="faq-heading headings-car">
                <h4>FAQ</h4>
                <h1>Frequently Asked Questions</h1>
                <p>Frequently Asked Questions About the Car Rental 
                    Booking Process on Our Website: Answers to Common Concerns and Inquiries.
                </p>
            </div>
            <div className="faq-questions">
                <div className="single-question">
                    <div  className={`question ${answer ? "active-question" : ""}`} onClick={handleAnswer}>
                        <p>1. What is special about comparing rental car deals?</p>
                        <i class="fa-sharp fa-solid fa-angle-down"></i>
                    </div>
                    <div className={`answer ${answer ? "active-answer" : ""}`}>
                        <p>Comparing rental car deals is important as it 
                            helps find the best deal that fits your budget and requirements, 
                            ensuring you get the most value for your money. By comparing various options, 
                            you can find deals that offer lower prices, additional services, or better car models. 
                            You can find car rental deals  by researching online and comparing prices 
                            from different rental companies.
                        </p>
                    </div>
                </div>
                <div className="single-question">
                <div  onClick={handleSecondAnswer} className={`question ${secondAnswer ? "active-question" : ""}`}>
                        <p>2. How do I find the car rental deals?</p>
                        <i class="fa-sharp fa-solid fa-angle-down"></i>
                    </div>
                    <div className={`answer ${secondAnswer ? "active-answer" : ""}`}>
                        <p>You can find car rental deals by researching online and comparing prices from 
                            different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices 
                            and view available rental options. It is also recommended to sign up for email newsletters and follow rental car 
                            companies on social media to be informed of any special deals or promotions.
                        </p>
                    </div>
                </div>
                <div className="single-question">
                <div onClick={handleThirdAnswer} className={`question ${thirdAnswer ? "active-question" : ""}`}  >
                        <p>3. How do I find such low rental car prices?</p>
                        <i class="fa-sharp fa-solid fa-angle-down"></i>
                    </div>
                    <div className={`answer ${thirdAnswer ? "active-answer" : ""}`}>
                        <p>Book in advance: Booking your rental car ahead of time can often result in lower prices. 
                            Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity 
                            to compare prices from multiple rental car companies. Look for discount codes and coupons: 
                            Search for discount codes and coupons that you can use to lower the rental price.
                            Renting from an off-airport location can sometimes result in lower prices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FAQ