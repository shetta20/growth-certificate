import React, { useState } from 'react'
import Certificate from './Certificate';
import { useEffect } from 'react';
import { BrowserRouter,Link } from 'react-router-dom';

const Print =(props) => {
    

    useEffect(()=>{
        props.Details.print === true?print():console.log("No print")
      })

      const print = () => {
        window.print()
        setTimeout(() => {
          props.setDetails({name:props.Details.name,award:props.Details.award,awardIMG:props.Details.awardIMG,print:false,quarter:props.Details.quarter,year:props.Details.year})
        }, 100);
      }

    return(
    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Certificate print={props.Details.print} Details={props.Details} setDetails={props.setDetails}/>
        {props.Details.print !== true?
        <div style={{margin:'2%'}}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'150%'}}>
              Let's go back to the console.
            </div>
            <Link to='/'>   
                <button className="Button" style={{width:'100px',margin:'10%'}}>Back</button>
            </Link>
        </div>:null}
    </div>)
}

export default Print;