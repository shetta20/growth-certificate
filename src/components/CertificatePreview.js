import React, { useEffect } from 'react'
import SignaturePreview from './SignaturePreview'
import LogoPreview from './LogoPreview'
import ContentPreview from './ContentPreview'

const CertificatePreview = (props) => {
    return(    
    <div>
    <div className="certificate2">
      <div className="inner2">
      <LogoPreview />
      <ContentPreview Details={props.Details} setDetails={props.setDetails}/>
      <SignaturePreview />
      </div>
    </div>
  </div>);
}

export default CertificatePreview;