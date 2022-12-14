import React from 'react'

const CertStyle = (props) => {

    const changeColor = (event) => {
        console.log("here",event.target.value)
        props.setDetails({name:props.Details.name,award:props.Details.award,awardIMG:props.Details.awardIMG,img:props.Details.img,print:props.Details.print,quarter:props.Details.quarter,month:props.Details.month,year:props.Details.year,bordercolor:event.target.value,nameFont:props.Details.nameFont,awardFont:props.Details.awardFont,line1:props.Details.line1,line2:props.Details.line2})
    }

    const changeBorder = (event) =>{
        props.setborder({borderType:event.target.value,borderwidth:props.border.borderwidth})
    }

    const changeBorderWidth = (event) =>{
        props.setborder({borderType:props.border.borderType,borderwidth:event.target.value})
    }

    const AwardFontChange = (event) => {
        console.log("here",event.target.value)
        props.setDetails({name:props.Details.name,award:props.Details.award,awardIMG:props.Details.awardIMG,img:props.Details.img,print:props.Details.print,quarter:props.Details.quarter,month:props.Details.month,year:props.Details.year,bordercolor:props.Details.bordercolor,nameFont:props.Details.nameFont,awardFont:event.target.value,line1:props.Details.line1,line2:props.Details.line2})
    }

    const NameFontChange = (event) => {
        console.log("here",event.target.value)
        props.setDetails({name:props.Details.name,award:props.Details.award,awardIMG:props.Details.awardIMG,img:props.Details.img,print:props.Details.print,quarter:props.Details.quarter,month:props.Details.month,year:props.Details.year,bordercolor:props.Details.bordercolor,nameFont:event.target.value,awardFont:props.Details.awardFont,line1:props.Details.line1,line2:props.Details.line2})
    }

    return(
        <div className="CertStyle">
                    <div style={{width:'50%',height:'100%',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                        <div>
                            <label>Select theme color:</label>
                            <input type="color" style={{width:'50px',height:'50px'}} defaultValue="#05438E" onChange={changeColor}/>
                        </div>
                        <br/>
                        <div style={{display:'flex',flexDirection:'column',width:'60%'}}>
                            <label>Select border type:</label>
                            <select style={{padding:'5%',textAlign:'center'}} onChange={changeBorder}>
                                <option>Solid</option>
                                <option>dotted</option>
                                <option>dashed</option>
                                <option>double</option>
                                <option>groove</option>
                            </select>
                            <br/>
                            <label>Select border thickness:</label>
                            <select style={{padding:'5%',textAlign:'center'}} onChange={changeBorderWidth}>
                                <option>1px</option>
                                <option>2px</option>
                                <option>3px</option>
                                <option>6px</option>
                                <option>9px</option>
                                <option>15px</option>
                            </select>
                        </div>
                    </div>
                    <div style={{width:'70%',height:'100%',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                        <div style={{width:'70%',border:'1px solid black',margin:'4%',padding:'2%'}}>
                            <label>Select font for the name of the employee</label>
                            <select style={{padding:'2%'}} defaultValue='Train One, cursive' onChange={NameFontChange}>
                                <option value='Rampart One, cursive'>Rampart One, cursive</option>
                                <option value='Varela Round, sans-serif'>Varela Round, sans-serif</option>
                                <option value='Bebas Neue, cursive'>Bebas Neue, cursive</option>
                                <option value='Train One, cursive'>Train One, cursive</option>
                            </select>
                        </div>
                        
                        <div style={{width:'70%',border:'1px solid black',margin:'4%',padding:'2%'}}>
                            <label>Select font for the name of the Award</label>
                            <select style={{padding:'2%'}} defaultValue='Train One, cursive' onChange={AwardFontChange}>
                                <option value='Rampart One, cursive'>Rampart One, cursive</option>
                                <option value='Varela Round, sans-serif'>Varela Round, sans-serif</option>
                                <option value='Bebas Neue, cursive'>Bebas Neue, cursive</option>
                                <option value='Train One, cursive'>Train One, cursive</option>
                            </select>
                        </div>
                    </div>
        </div>
    );
}

export default CertStyle