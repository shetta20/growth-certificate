import React, { useState } from 'react'
import Certificate from './Certificate/Certificate';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Print =(props) => {
    

    useEffect(()=>{
        props.Details.print === true?print():console.log("No print")
      })

      const print = () => {
        window.print()
        setTimeout(() => {
          props.setDetails({name:props.Details.name,award:props.Details.award,awardIMG:props.Details.awardIMG,img:props.Details.img,print:false,quarter:props.Details.quarter,month:props.Details.month,year:props.Details.year,bordercolor:props.Details.bordercolor,nameFont:props.Details.nameFont,awardFont:props.Details.awardFont,line1:props.Details.line1,line2:props.Details.line2})
        }, 100);
      }

    return(
    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Certificate border={props.border} print={props.Details.print} Details={props.Details} setDetails={props.setDetails}/>
        {props.Details.print !== true?
        <div style={{margin:'2%'}}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'150%'}}>
              Let's go back to the console.
            </div>
            <Link to='/home'>   
                <button className="Button" style={{width:'100px',margin:'10%'}}>Back</button>
            </Link>
        </div>:null}
    </div>)
}

export default Print;