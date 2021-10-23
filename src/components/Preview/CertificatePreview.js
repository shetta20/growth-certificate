import React, { useEffect } from 'react'
import SignaturePreview from './SignaturePreview'
import LogoPreview from './LogoPreview'
import ContentPreview from './ContentPreview'

const CertificatePreview = (props) => {
    return(    
    <div>
    <div className="certificate2">
      <div className="inner2" style={{border:`10px solid ${props.Details.bordercolor}`}}>
      <LogoPreview />
      <ContentPreview Details={props.Details} setDetails={props.setDetails} color={props.Details.bordercolor}/>
      <SignaturePreview />
      </div>
    </div>
  </div>);
}

export default CertificatePreview;