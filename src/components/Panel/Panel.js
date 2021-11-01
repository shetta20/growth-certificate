import React from 'react'
import CardHolder from './CardHolder';
import CertStyle from './CertStyle';
import Form from './Form';

const Panel = (props) => {
    return(            
    <div className="left">
    <div style={{display:'flex',height:'5vh',width:'95%',border:'2px solid #ddd',flexDirection:'row',justifyContent:'center',backgroundColor:'#05438E'}}>
        <div className="navButton" onClick={()=>props.setscreen("image")}>
            Image Select
        </div>
        <div className="navButton" onClick={()=>props.setscreen("fontcolor")}>
            Font, Color and Border
        </div>
        <div className="navButton" onClick={()=>props.setscreen("details")}>
            Details
        </div>
    </div>

    {props.screen === "image"?<div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh'}}>
        <CardHolder Details={props.Details} setDetails={props.setDetails}/>
        </div>:props.screen === "fontcolor"?<CertStyle border={props.border} setborder={props.setborder} Details={props.Details} setDetails={props.setDetails}/>:props.screen === "details"?<div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh'}}>
        <Form Details={props.Details} setDetails={props.setDetails}/>
        </div>:null}

</div>);
}

export default Panel