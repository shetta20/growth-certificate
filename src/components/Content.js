import React from 'react'
import rookie from '../images/rookie.png'
import peer from '../images/peer.png'
import dftc from '../images/dftc.png'
import champ from '../images/champ.png'
import rocket from '../images/rocket.png'

const Content = (props) => {
    return(        
    <div className="content">
        <div className="awardimage">
            {console.log(props.Details.awardIMG)}
            <img src={props.Details.awardIMG} style={{opacity:'0.25',zIndex:'1',position:'absolute',display:'flex',marginLeft:'10%',marginTop:'3%'}}/>
        </div>
        <div className="contenttext">
            <div>
                <h1 className="font-link" style={{display:'flex',justifyContent:'center',height:'auto',color:'#05438E',fontSize:'300%',marginBottom:'1%'}}>{props.Details.name}</h1>
            </div>
            <div>
                <p style={{fontSize:'120%'}}>has been awarded with the</p>
            </div>
            <div className="font-link-1">
                {props.Details.award === 'champ'?'KPI Champion Award':props.Details.award === 'peer'?'Peer Award':props.Details.award === 'dftc'?'Dont F the customer Award':props.Details.award === 'rookie'?'Best Rookie Award':null}
            </div>
            <div style={{marginTop:'1%',fontSize:'80%'}}>
            <p style={{fontSize:'130%'}}>{`For the Quarter ${props.Details.quarter} ${props.Details.year}`}</p>
            </div>
            <div className="font-link-1" style={{fontSize:'150%',marginTop:'3%',color:'black'}}>
                <b>Certified by</b>
            </div>
        </div>
    </div>
    )
}

export default Content