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
          props.setDetails({name:props.Details.name,award:props.Details.award,print:false,quarter:props.Details.quarter,year:props.Details.year})
        }, 100);
      }

    return(
    <div>
        <Certificate Details={props.Details} setDetails={props.setDetails}/>
        {props.Details.print !== true?
        <div style={{margin:'2%'}}>
            <Link to='/'>   
                <button style={{width:'10%',padding:'2%'}}>Back</button>
            </Link>
        </div>:null}
    </div>)
}

export default Print;