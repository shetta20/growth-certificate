import React from 'react'
import Card from './Card.js'
import CardHolder from './CardHolder.js';

import CertificatePreview from './CertificatePreview';
import ControlPanel from './ControlPanel';
import Form from './Form.js';

const Home = (props) => {


    return(
<div className="Home">
        <div style={{display:'flex',justifyContent:'center',width:'100%',height:'97vh',flexDirection:'row'}}>
            <div className="left">
                <div style={{fontSize:'100%',margin:'0%',fontStyle:'bold',backgroundColor:'#73AFF7',width:'70%',height:'7%',borderRadius:'10px',marginBottom:'1%',marginTop:'1%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <p>Select an image to add to certificate background &#11015;</p>
                </div>
                    
                    <div style={{height:'40%',border:'1px solid black',borderRadius:'3%',marginRight:'2%',marginTop:'1%'}}>
                    <CardHolder Details={props.Details} setDetails={props.setDetails}/>
                    </div>

                    <div style={{fontSize:'100%',margin:'0%',fontStyle:'bold',backgroundColor:'#73AFF7',width:'70%',height:'7%',borderRadius:'10px',marginBottom:'1%',marginTop:'1%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <p>Enter Engineer Name, Award, Quarter and Year &#11015;</p>
                    </div>
                    
                    <div style={{width:'100%',height:'40%',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'1%'}}>
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