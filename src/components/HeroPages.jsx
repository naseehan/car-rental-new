import React from 'react'

function HeroPages(props) {
  return (
    <section className="hero-section">
        <div className="hero-page-overlay"></div>
        <div className="container">
            <div className="hero-page-text">
                <h1>{props.name}</h1>
                <p>Home /  {props.name}</p>
            </div>
        </div>
    </section>
  )
}

export default HeroPages