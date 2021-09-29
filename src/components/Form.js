import React from 'react'
import {Link} from 'react-router-dom';

const Form = (props) => {

    const handleNameChange = (event) => {
        props.setDetails({name:event.target.value,award:props.Details.award,awardIMG:props.Details.awardIMG,print:false,quarter:props.Details.quarter,year:props.Details.year})
    }

    const handleYearChange = (event) => {
        props.setDetails({name:props.Details.name,award:props.Details.award,awardIMG:props.Details.awardIMG,print:false,quarter:props.Details.quarter,year:event.target.value})
    }

    const handleAwardChange = (event) => {
        props.setDetails({name:props.Details.name,award:event.target.value,awardIMG:props.Details.awardIMG,print:false,quarter:props.Details.quarter,year:props.Details.year})
    }

    const handleQuarterChange = (event) => {
        props.setDetails({name:props.Details.name,award:props.Details.award,awardIMG:props.Details.awardIMG,print:false,quarter:event.target.value,year:props.Details.year})
    }

    return(
        <div style={{display:'flex',width:'99%',height:'100%',justifyContent:'center',alignItems:'center',flexDirection:'column',paddingLeft:'4%',paddingRight:'4%',flexWrap:'wrap',marginRight:'1%',border:'1px solid black',borderRadius:'3%',marginRight:'2%'}}>
            <div>
                <label style={{fontSize:'120%'}}>Engineer:</label>
                <input style={{width:'50%',padding:'2%'}} type="text" placeholder="Name" onChange={handleNameChange}/>
                <br />
                <label style={{fontSize:'120%'}}>Select award:</label>
                <select className="select" style={{width:'50%',padding:'2%'}} defaultValue={props.Details.award} onChange={handleAwardChange}>
                    <option value="dftc">Dont F the customer</option>
                    <option value="peer">Peer Award</option>
                    <option value="champ">KPI Champion</option>
                    <option value="rookie">Best Rookie</option>
                </select>
            </div>
    
            <div>
                <label style={{fontSize:'120%'}}>Quarter:</label>
                <select className="select" style={{width:'15%',paddingTop:'2%',paddingBottom:'2%'}} defaultValue={props.Details.quarter} onChange={handleQuarterChange}>
                    <option value="Q1">Q1</option>
                    <option value="Q2">Q2</option>
                    <option value="Q3">Q3</option>
                    <option value="Q4">Q4</option>
                </select>

                <label style={{fontSize:'120%'}}>Select Year:</label>
                <input type="text" style={{width:'15%',padding:'2%'}} placeholder="Year" onChange={handleYearChange}/>
            </div>
            <div>
                <Link to='/certificate'>   
                    <button className="Button" onClick={()=>props.setDetails({name:props.Details.name,award:props.Details.award,awardIMG:props.Details.awardIMG,print:true,quarter:props.Details.quarter,year:props.Details.year})}>Print certificate</button>
                </Link>
            </div>
        </div>
    )
}

export default Form;