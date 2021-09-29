import React from 'react'
import peer from '../images/peer.png'
import champ from '../images/champ.png'

const Card = (props) => {
    const setImage = () => {
        props.setDetails({name:props.Details.name,award:props.Details.award,awardIMG:props.src,print:false,quarter:props.Details.quarter,year:props.Details.year})
    }

    return(
    <div className="card" onClick={()=>setImage()}>
        <img src={props.src} />
    </div>);
}

export default Card;
