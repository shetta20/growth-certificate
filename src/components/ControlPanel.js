import React, { useState } from 'react'
import ImageSelect from './ImageSelect.js'

import Form from './Form';


const ControlPanel = (props) => {

    const [select,setselect] = useState('form')


    return(    
        <div style={{border:'10px solid black',width:'40%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'20px',height:'40%'}}>
            {select ==='image'?<ImageSelect />:<Form Details={props.Details} setDetails={props.setDetails}/>}
        </div>
    )
}

export default ControlPanel;