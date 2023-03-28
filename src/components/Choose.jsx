import React from 'react'
import ChooseData  from './Choose-data'
import ChooseSpec from './ChooseSpec'


function Choose() {
  return (
    <section className='choose-us-section'>
        <div className="container">
            <div className="choose-full">
                <div className="choose-img">
                    <img src="../assets/images/ChooseUs/choose-main-img.png " alt="" />
                </div>
                <div className="choose-desc">
                    <div className="why-choose commen-btn">
                        <h4>Why Choose Us</h4>
                        <h2>Best valued deals you will ever find</h2>
                        <p>Discover the best deals you'll ever find with our unbeatable 
                            offers. We're dedicated to providing you with the best value for your money,
                            so you can enjoy top-quality services and products without breaking the bank. Our deals are
                            designed to give you the ultimate renting experience, so don't miss out on your chance to save big.
                        </p>
                        <button>Find details</button>
                    </div>
                    <div className="choose-spec-all">

                        <ChooseSpec data={ChooseData}/>
                    
                        {/* <ChooseSpec data={Choose}/>
                        <ChooseSpec data={Choose}/> */}
                    {/* <div className="choose-specs">
                        <div className="choose-spec-img">
                            <img src="assets/images/ChooseUs/spec-img.png" alt="" />
                        </div>
                        <div className="choose-spec-text">
                            <h2>Cross Country Drive</h2>
                            <p>Take your driving experience to the next level with 
                                our top-notch vehicles for your cross-country adventures
                            </p>
                        </div>
                    </div>
                    <div className="choose-specs">
                        <div className="choose-spec-img">
                            <img src="assets/images/ChooseUs/spec-img.png" alt="" />
                        </div>
                        <div className="choose-spec-text">
                            <h2>Cross Country Drive</h2>
                            <p>Take your driving experience to the next level with 
                                our top-notch vehicles for your cross-country adventures
                            </p>
                        </div>
                    </div>
                    <div className="choose-specs">
                        <div className="choose-spec-img">
                            <img src="assets/images/ChooseUs/spec-img.png" alt="" />
                        </div>
                        <div className="choose-spec-text">
                            <h2>Cross Country Drive</h2>
                            <p>Take your driving experience to the next level with 
                                our top-notch vehicles for your cross-country adventures
                            </p>
                        </div>
                    </div>*/}
                    </div> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Choose
