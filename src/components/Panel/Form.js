import React from 'react'
import {Link} from 'react-router-dom';

const Form = (props) => {

    const handleNameChange = (event) => {
        props.setDetails({name:event.target.value,award:props.Details.award,awardIMG:props.Details.awardIMG,print:false,quarter:props.Details.quarter,month:props.Details.month,year:props.Details.year,bordercolor:props.Details.bordercolor,nameFont:props.Details.nameFont,awardFont:props.Details.awardFont,line1:props.Details.line1,line2:props.Details.line2})
    }

    const handleYearChange = (event) => {
        props.setDetails({name:props.Details.name,award:props.Details.award,awardIMG:props.Details.awardIMG,print:false,quarter:props.Details.quarter,month:props.Details.month,year:event.target.value,bordercolor:props.Details.bordercolor,nameFont:props.Details.nameFont,awardFont:props.Details.awardFont,line1:props.Details.line1,line2:props.Details.line2})
    }

    const handleAwardChange = (event) => {
        props.setDetails({name:props.Details.name,award:event.target.value,awardIMG:props.Details.awardIMG,print:false,quarter:props.Details.quarter,month:props.Details.month,year:props.Details.year,bordercolor:props.Details.bordercolor,nameFont:props.Details.nameFont,awardFont:props.Details.awardFont,line1:props.Details.line1,line2:props.Details.line2})
    }

    const handleLine1Change = (event) => {
        props.setDetails({name:props.Details.name,award:props.Details.award,awardIMG:props.Details.awardIMG,print:false,quarter:props.Details.quarter,month:props.Details.month,year:props.Details.year,bordercolor:props.Details.bordercolor,nameFont:props.Details.nameFont,awardFont:props.Details.awardFont,line1:event.target.value,line2:props.Details.line2})
    }

    const handleLine2Change = (event) => {
        props.setDetails({name:props.Details.name,award:props.Details.award,awardIMG:props.Details.awardIMG,print:false,quarter:props.Details.quarter,month:props.Details.month,year:props.Details.year,bordercolor:props.Details.bordercolor,nameFont:props.Details.nameFont,awardFont:props.Details.awardFont,line1:props.Details.line1,line2:event.target.value})
    }

    const handleQuarterChange = (event) => {
        props.setDetails({name:props.Details.name,award:props.Details.award,awardIMG:props.Details.awardIMG,print:false,quarter:event.target.value,month:props.Details.month,year:props.Details.year,bordercolor:props.Details.bordercolor,nameFont:props.Details.nameFont,awardFont:props.Details.awardFont,line1:props.Details.line1,line2:props.Details.line2})
    }

    const handleMonthChange = (event) => {
        props.setDetails({name:props.Details.name,award:props.Details.award,awardIMG:props.Details.awardIMG,print:false,quarter:props.Details.quarter,month:event.target.value,year:props.Details.year,bordercolor:props.Details.bordercolor,nameFont:props.Details.nameFont,awardFont:props.Details.awardFont,line1:props.Details.line1,line2:props.Details.line2})
    }

    return(
        <div style={{display:'flex',width:'99%',height:'90%',justifyContent:'center',alignItems:'center',flexDirection:'column',paddingLeft:'4%',paddingRight:'4%',flexWrap:'wrap',marginRight:'1%',border:'1px solid black',borderRadius:'3%',marginRight:'2%'}}>
            <div style={{display:'flex',flexDirection:'row',width:'100%',height:'50%'}}>
                <div style={{width:'100%',border:'1px solid black',height:'100%'}}>
                    <div style={{marginBottom:'2%'}}>
                        <label>Engineer:</label>
                        <input style={{width:'80%',padding:'1%'}} type="text" placeholder="Name" onChange={handleNameChange}/>
                    </div>
                    <div style={{marginBottom:'2%'}}>
                        <label>Select Preset award:</label>
                        <select className="select" style={{width:'80%',padding:'1%'}} defaultValue={props.Details.award} value={props.Details.award} onChange={handleAwardChange}>
                            <option value="dftc">Dont F the customer</option>
                            <option value="peer">Peer Award</option>
                            <option value="champ">KPI Champion</option>
                            <option value="rookie">Best Rookie</option>
                        </select>
                    </div>
                    <div style={{marginBottom:'2%'}}>
                        <label>Select Preset line 1:</label>
                        <select className="select" style={{width:'80%',padding:'1%'}} onChange={handleLine1Change}>
                            <option value="Has been awarded with the">Has been awarded with the</option>
                            <option value="Has been recognized as the">Has been recognized as the</option>
                            <option value="Has proven to be">Has proven to be</option>
                            <option value="Has cleared the">Has cleared the</option>
                        </select>
                    </div>
                    <div style={{marginBottom:'2%'}}>
                        <label>Select Preset line 2:</label>
                        <select className="select" style={{width:'80%',padding:'1%'}} onChange={handleLine2Change}>
                            <option value="ftqny">For the Quarter & Year</option>
                            <option value="fty">For the Year</option>
                            <option value="ftmny">For the Month & Year</option>
                        </select>
                    </div>
                </div>
                <div style={{width:'100%',border:'1px solid black',height:'100%'}}>
                <div style={{marginBottom:'2%'}}>
                        <label>Engineer:</label>
                        <input style={{width:'80%',padding:'1%'}} type="text" placeholder="Name" onChange={handleNameChange}/>
                    </div>
                    <div>
                    <label>Enter the Line 1:</label>
                        <input type="text" style={{width:'80%',padding:'1%'}} placeholder="Why?" onChange={handleLine1Change} />
                    </div>
                    <div>
                    <label>Enter the Award name:</label>
                        <input type="text" style={{width:'80%',padding:'1%'}} placeholder="Why?" onChange={handleAwardChange} />
                    </div>
                    <div>
                    <label>Enter Line two:</label>
                        <input type="text" style={{width:'80%',padding:'1%'}} placeholder="Why?" onChange={handleLine2Change} />
                    </div>
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
                    <label style={{fontSize:'120%'}}>Month:</label>
                    <select className="select" style={{width:'45%',height:'80%',paddingTop:'2%',paddingBottom:'2%',margin:'2%'}} defaultValue={props.Details.quarter} onChange={handleMonthChange}>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
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
                    <button className="Button" onClick={()=>props.setDetails({name:props.Details.name,award:props.Details.award,awardIMG:props.Details.awardIMG,img:props.Details.img,print:true,quarter:props.Details.quarter,year:props.Details.year,bordercolor:props.Details.bordercolor,nameFont:props.Details.nameFont,awardFont:props.Details.awardFont,line1:props.Details.line1,line2:props.Details.line2})}>Print certificate</button>
                </Link>
            </div>
        </div>
    )
}

export default Form;