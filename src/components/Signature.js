import React from 'react'
import signature from '../images/Signature.png'

const Signature = () => {
    return(        <div style={{display:'flex',marginLeft:'8%',marginRight:'8%',height:'20%',marginTop:'40%'}}>
    <div style={{display:'flex',width:'50%',justifyContent:'center',alignItems:'center',flexDirection:'column',position:'relative',zIndex:'2',backgroundColor:'rgba(0,0,0,0)'}}>
        <img src={signature} style={{height:'55%',width:'45%'}}/>
      <div className="font-link-1" style={{fontSize:'100%',color:'black',margin:'0%'}}>
        Jon Livingston
      </div>
      <div className="font-link-1" style={{fontSize:'100%',color:'black',marginTop:'0%'}}>
        Senior Manager, Cloud Growth
      </div>
      <div className="font-link-1" style={{fontSize:'100%',color:'black',marginTop:'0%',fontWeight:'null'}}>
        Atlassian
      </div>
    </div>
    <div style={{display:'flex',width:'50%',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <img src={signature} style={{height:'55%',width:'45%'}}/>
      <div className="font-link-1" style={{fontSize:'100%',color:'black',margin:'0%'}}>
        Stewart Wayne
      </div>
      <div className="font-link-1" style={{fontSize:'100%',color:'black',marginTop:'0%'}}>
        Senior Manager, Cloud Growth
      </div>
      <div className="font-link-1" style={{fontSize:'100%',color:'black',marginTop:'0%',fontWeight:'null'}}>
        Atlassian
      </div>
    </div>
  </div>);
}

export default Signature