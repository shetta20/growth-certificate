import React from 'react'
import Card from './Card'
import peer from '../images/peer.png'
import champ from '../images/champ.png'
import dftc from '../images/dftc.png'
import rookie from '../images/rookie.png'

const CardHolder = (props) => {
    return(
        <div style={{width:'100%',display:'flex',flexWrap:'wrap',overflowY:'scroll',height:'90%',justifyContent:'center',paddingBottom:'5%'}}>
            <Card src={peer} Details={props.Details} setDetails={props.setDetails}/>
            <Card src={champ} Details={props.Details} setDetails={props.setDetails}/>
            <Card src={dftc} Details={props.Details} setDetails={props.setDetails}/>
            <Card src={rookie} Details={props.Details} setDetails={props.setDetails}/>
            <Card src={peer} Details={props.Details} setDetails={props.setDetails}/>
            <Card src={champ} Details={props.Details} setDetails={props.setDetails}/>
            <Card src={dftc} Details={props.Details} setDetails={props.setDetails}/>
            <Card src={rookie} Details={props.Details} setDetails={props.setDetails}/>
            <Card src={peer} Details={props.Details} setDetails={props.setDetails}/>
            <Card src={champ} Details={props.Details} setDetails={props.setDetails}/>
            <Card src={dftc} Details={props.Details} setDetails={props.setDetails}/>
            <Card src={rookie} Details={props.Details} setDetails={props.setDetails}/>
            <Card src={peer} Details={props.Details} setDetails={props.setDetails}/>
            <Card src={champ} Details={props.Details} setDetails={props.setDetails}/>
            <Card src={dftc} Details={props.Details} setDetails={props.setDetails}/>
            <Card src={rookie} Details={props.Details} setDetails={props.setDetails}/>
        </div>
    )
}

export default CardHolder