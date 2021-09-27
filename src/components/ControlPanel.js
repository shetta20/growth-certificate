import React from 'react'
import {Link} from 'react-router-dom';

const ControlPanel = (props) => {

    const handleNameChange = (event) => {
        props.setDetails({name:event.target.value,award:props.Details.award,print:false,quarter:props.Details.quarter,year:props.Details.year})
    }

    const handleYearChange = (event) => {
        props.setDetails({name:props.Details.name,award:props.Details.award,print:false,quarter:props.Details.quarter,year:event.target.value})
    }

    const handleAwardChange = (event) => {
        props.setDetails({name:props.Details.name,award:event.target.value,print:false,quarter:props.Details.quarter,year:props.Details.year})
    }

    const handleQuarterChange = (event) => {
        props.setDetails({name:props.Details.name,award:props.Details.award,print:false,quarter:event.target.value,year:props.Details.year})
    }

    return(        
    <div style={{border:'10px solid black',width:'30%',height:'80%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'20px'}}>
    
    <label style={{fontSize:'120%'}}>Enter name of the Engineer to be awarded:</label>
    <input type="text" placeholder="Name" onChange={handleNameChange}/>

    <label style={{fontSize:'120%',marginTop:'5%'}}>Select award:</label>
    <select className="select" defaultValue={props.Details.award} onChange={handleAwardChange}>
        <option value="dftc">Dont F the customer</option>
        <option value="peer">Peer Award</option>
        <option value="champ">KPI Champion</option>
        <option value="rookie">Best Rookie</option>
    </select>

    <label style={{fontSize:'120%',marginTop:'5%'}}>Select Quarter:</label>
    <select className="select" defaultValue={props.Details.quarter} onChange={handleQuarterChange}>
        <option value="Q1">Q1</option>
        <option value="Q2">Q2</option>
        <option value="Q3">Q3</option>
        <option value="Q4">Q4</option>
    </select>

    <label style={{fontSize:'120%',marginTop:'5%'}}>Select Year:</label>
    <input type="text" placeholder="Year" onChange={handleYearChange}/>

    <Link to='/certificate'>   
        <button className="Button" onClick={()=>props.setDetails({name:props.Details.name,award:props.Details.award,print:true,quarter:props.Details.quarter,year:props.Details.year})}>Print certificate</button>
    </Link>
</div>)
}

export default ControlPanel;