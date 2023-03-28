import React from 'react'

function ChooseSpec(props) {
  return (
<>
{props.data.map((data) => (
    <div className="choose-specs">
        
    <div className="choose-spec-img">
        <img src={data.img} alt="" />
    </div>
    <div className="choose-spec-text">
        <h2>{data.heading}</h2>
        <p>{data.text}
        </p>
    </div>
  
</div>
  ))}
</>
  )
}

export default ChooseSpec
