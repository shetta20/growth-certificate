import React, { useEffect } from 'react'
import Signature from './Signature'
import Logo from './Logo'
import Content from './Content'

const Certificate = (props) => {
    return(    
    <div>
    <div className="certificate">
      <div className="inner1">
      <Logo />
      <Content Details={props.Details} setDetails={props.setDetails}/>
      <Signature />
      </div>
    </div>
  </div>);
}

export default Certificate;