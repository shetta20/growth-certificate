import React from 'react'
import Card from './Card.js'
import CardHolder from './CardHolder.js';

import CertificatePreview from './CertificatePreview';
import ControlPanel from './ControlPanel';
import Form from './Form.js';

const Home = (props) => {


    return(
<div style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
        <div style={{display:'flex',justifyContent:'center',width:'100%',height:'97vh',flexDirection:'row'}}>
            <div className="left">
                    <p style={{fontSize:'120%',margin:'0%',fontStyle:'bold'}}>Select Image:</p>
                    <div style={{height:'50%',border:'1px solid black',borderRadius:'3%',marginRight:'2%'}}>
                    <CardHolder Details={props.Details} setDetails={props.setDetails}/>
                    </div>
                    
                    <div style={{width:'100%',height:'50%',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'1%'}}>
                        <Form Details={props.Details} setDetails={props.setDetails}/>
                    </div>
            </div>
            <div style={{display:'flex',width:'60%',height:'100%',border:'1px solid black',flexDirection:'column',justifyContent:'center',alignItems:'center',border:'1px solid black'}}>
                <CertificatePreview Details={props.Details} setDetails={props.setDetails}/>
            </div>
        </div>
</div>
    
    )
}

export default Home;