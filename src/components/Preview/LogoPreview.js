import React from 'react'
import logo2 from '../../images/Untitled.png'

const LogoPreview = () => {
    return(     
      <div style={{height:'10%',width:'100%'}}>
          <div className="logoHolder2">
              <img src={logo2} height="100%" width="38%" margin='none' style={{marginTop:'2%'}}/>  
            </div>
      </div>   
  );
}

export default LogoPreview;