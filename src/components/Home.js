import React from 'react'

import CertificatePreview from './CertificatePreview';
import ControlPanel from './ControlPanel';

const Home = (props) => {


    return(
<div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>
            <ControlPanel Details={props.Details} setDetails={props.setDetails}/>
            <CertificatePreview Details={props.Details} setDetails={props.setDetails}/>
        </div>
</div>
    
    )
}

export default Home;