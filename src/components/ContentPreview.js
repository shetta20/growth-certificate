import React from 'react'
import rookie from '../images/rookie.png'
import peer from '../images/peer.png'
import dftc from '../images/dftc.png'
import champ from '../images/champ.png'
import rocket from '../images/rocket.png'

const ContentPreview = (props) => {
    return(        
    <div className="content2">
        <div className="awardimage2">
            <img src={props.Details.awardIMG} style={{opacity:'0.25',zIndex:'1',position:'absolute',display:'flex',marginLeft:'5%',width:'30%',marginTop:'0px',marginLeft:'60px'}}/>
        </div>
        <div className="contenttext">
            <div>
                <h1 className="font-link" style={{display:'flex',justifyContent:'center',height:'auto',color:'#05438E',fontSize:'250%',marginTop:'5%'}}>{props.Details.name}</h1>
            </div>
            <div>
                <p style={{fontSize:'120%',margin:'0'}}>has been awarded with the</p>
            </div>
            <div className="font-link-2">
                {props.Details.award === 'champ'?'KPI Champion':props.Details.award === 'peer'?'Peer Award':props.Details.award === 'dftc'?'Dont F the customer':props.Details.award === 'rookie'?'Best Rookie':null}
            </div>
            <div style={{marginTop:'0',fontSize:'80%'}}>
            <p style={{fontSize:'130%'}}>{`For the Quarter ${props.Details.quarter} ${props.Details.year}`}</p>
            </div>
            <div className="font-link-2" style={{fontSize:'150%',marginTop:'2%',color:'black'}}>
                <b>Certified by</b>
            </div>
        </div>
    </div>
    )
}

export default ContentPreview