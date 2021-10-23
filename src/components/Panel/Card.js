import React from 'react'
import peer from '../../images/peer.png'
import champ from '../../images/champ.png'

const Card = (props) => {
    const setImage = () => {
        props.setDetails({name:props.Details.name,award:props.Details.award,awardIMG:props.src,print:false,quarter:props.Details.quarter,month:props.Details.month,year:props.Details.year,bordercolor:props.Details.bordercolor,nameFont:props.Details.nameFont,awardFont:props.Details.awardFont,line1:props.Details.line1,line2:props.Details.line2})
    }

    return(
    <div className="card" onClick={()=>setImage()}>
        <img src={props.src} />
    </div>);
}

export default Card;
