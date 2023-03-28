import React from 'react'
import HeroPages from '../components/HeroPages'
import "../stylePages/teamStyles/App.css"
import karollShelby from "../images/team/karollShelby.png"
import kenMiles  from "../images/team/kenMiles.jpg"
import kristen from "../images/team/kristen.webp"
import leo from "../images/team/leo.jpeg"
import michael from "../images/team/michael.webp"
import willSmith from "../images/team/willSmith.jpg"
import Banner from '../components/Banner'

function Team() {
  return (
    <section className="team-section">
        <HeroPages name="Our Team"/>
        <div className="container">
            
        <div className="team-people">
                <div className="team-person">
                        <div className="person-img">
                            <img src={willSmith} alt="" />
                        </div>
                        <div className="person-text">
                            <h2>Chris Gardner</h2>
                            <p>Salesman</p>
                        </div>
                </div>

                <div className="team-person">
                        <div className="person-img">
                            <img src={leo} alt="" />
                        </div>
                        <div className="person-text">
                            <h2>Jordan Belfort</h2>
                            <p>Business Owner</p>
                        </div>
                </div>

                <div className="team-person">
                        <div className="person-img">
                            <img src={kristen} alt="" />
                        </div>
                        <div className="person-text">
                            <h2>Kristen</h2>
                            <p>Photographer</p>
                        </div>
                </div>

                <div className="team-person">
                        <div className="person-img">
                            <img src={karollShelby} alt="" />
                        </div>
                        <div className="person-text">
                            <h2>Karoll Shelby</h2>
                            <p>Car Detailist</p>
                        </div>
            </div>

            <div className="team-person">
                        <div className="person-img">
                            <img src={kenMiles} alt="" />
                        </div>
                        <div className="person-text">
                            <h2>Ken Miles</h2>
                            <p>Mechanic</p>
                        </div>
            </div>

            <div className="team-person">
                        <div className="person-img">
                            <img src={michael} alt="" />
                        </div>
                        <div className="person-text">
                            <h2>Michael Scott</h2>
                            <p>Manager</p>
                        </div>
            </div>
            </div>

        </div>
        <Banner />
    </section>
  )
}

export default Team