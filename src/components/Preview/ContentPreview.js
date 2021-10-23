import React from 'react'
import rookie from '../../images/rookie.png'
import peer from '../../images/peer.png'
import dftc from '../../images/dftc.png'
import champ from '../../images/champ.png'
import rocket from '../../images/rocket.png'

const ContentPreview = (props) => {
    return(        
    <div className="content2">
        <div className="awardimage2">
            <img src={props.Details.awardIMG} style={{opacity:'0.25',zIndex:'1',position:'absolute',display:'flex',marginLeft:'5%',width:'30%',marginTop:'0px',marginLeft:'60px'}}/>
        </div>
        <div className="contenttext">
            <div>
                <h1 className="font-link" style={{display:'flex',justifyContent:'center',height:'auto',color:`${props.color}`,fontSize:'250%',marginTop:'5%',fontFamily:props.Details.nameFont}}>{props.Details.name}</h1>
            </div>
            <div>
                <p style={{fontSize:'120%',margin:'0'}}>{props.Details.line1}</p>
            </div>
            <div className="font-link-2" style={{color:`${props.color}`,fontFamily:props.Details.awardFont}}>
                {props.Details.award === 'champ'?'KPI Champion Award':props.Details.award === 'peer'?'Peer Award':props.Details.award === 'dftc'?'Dont F the customer Award':props.Details.award === 'rookie'?'Best Rookie Award':props.Details.award}
            </div>
            <div style={{marginTop:'0',fontSize:'80%'}}>
            {/* <p style={{fontSize:'130%'}}>{`For the Quarter ${props.Details.quarter} ${props.Details.year}`}</p> */}
            <p style={{fontSize:'130%'}}>{props.Details.line2}</p>
            </div>
            <div className="font-link-2" style={{fontSize:'150%',marginTop:'2%',color:'black',fontFamily:props.Details.awardFont}}>
                <b>Certified by</b>
            </div>
        </div>
    </div>
    )
}

export default ContentPreview