import React, { useEffect } from 'react'
import Signature from './Signature'
import Logo from './Logo'
import Content from './Content'

const Certificate = (props) => {
    return(    
    <div>
    <div className={props.print === true?"certificate":"nocertificate"}>
      <div className="inner1" style={{border:`${props.border.borderwidth} ${props.border.borderType} #05438E`}}>
      <Logo />
      <Content Details={props.Details} setDetails={props.setDetails} color={props.Details.bordercolor}/>
      <Signature />
      </div>
    </div>
  </div>);
}

export default Certificate;