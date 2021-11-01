import React, { useState } from 'react'
import CertificatePreview from './Preview/CertificatePreview';
import Panel from './Panel/Panel.js'

const Home = (props) => {

    const [screen,setscreen] = useState("details");

    

    return(
<div className="Home">
        <div style={{display:'flex',justifyContent:'center',width:'100%',height:'97vh',flexDirection:'row',alignItems:'flex-start'}}>
            {console.log(screen)}
            <Panel border={props.border} setborder={props.setborder} Details={props.Details} setDetails={props.setDetails} setscreen={setscreen} screen={screen}/>

            <div style={{display:'flex',width:'60%',height:'100%',border:'1px solid black',flexDirection:'column',justifyContent:'center',alignItems:'center',border:'1px solid black',overflowY:'scroll'}}>
                <CertificatePreview border={props.border} Details={props.Details} setDetails={props.setDetails}/>
            </div>
        </div>
</div>
    
    )
}

export default Home;