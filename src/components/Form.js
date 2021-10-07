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
                <div style={{marginBottom:'2%'}}>
                    <label>Engineer:</label>
                    <input style={{width:'80%',padding:'1%'}} type="text" placeholder="Name" onChange={handleNameChange}/>
                </div>
                <div>
                    <label>Select award:</label>
                    <select className="select" style={{width:'70%'}} defaultValue={props.Details.award} value={props.Details.award} onChange={handleAwardChange}>
                        <option value="dftc">Dont F the customer Award</option>
                        <option value="peer">Peer Award</option>
                        <option value="champ">KPI Champion Award</option>
                        <option value="rookie">Best Rookie Award</option>
                    </select>
                </div>

            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'3%'}}>
                <div style={{width:'50%'}}>
                <label style={{fontSize:'120%'}}>Quarter:</label>
                <select className="select" style={{width:'45%',height:'80%',paddingTop:'2%',paddingBottom:'2%',margin:'2%'}} defaultValue={props.Details.quarter} onChange={handleQuarterChange}>
                    <option value="Q1">Q1</option>
                    <option value="Q2">Q2</option>
                    <option value="Q3">Q3</option>
                    <option value="Q4">Q4</option>
                </select>
                </div>

                <div style={{width:'50%'}}>
                <label style={{fontSize:'120%'}}>Select Year:</label>
                    <input type="text" style={{width:'25%',height:'30%',padding:'2%'}} placeholder="Year" onChange={handleYearChange}/>
                </div>
            </div>
            <br />
            <div style={{width:'40%'}}>
                <Link to='/certificate'>   
                    <button className="Button" onClick={()=>props.setDetails({name:props.Details.name,award:props.Details.award,awardIMG:props.Details.awardIMG,print:true,quarter:props.Details.quarter,year:props.Details.year})}>Print certificate</button>
                </Link>
            </div>
        </div>
    )
}

export default Form;