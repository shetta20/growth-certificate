import Recat from 'react'

const SignIn = (props) => {

    const handleUserChange = (event) => {
        props.setsignin({user:event.target.value,password:props.signin.password,success:false})
    }

    const handlePasswordChange = (event) => {
        props.setsignin({user:props.signin.user,password:event.target.value,success:false})
    }

    const check = () => {
        if(props.signin.user === 'cloud_growth' && props.signin.password === 'Growth123!')
        {
            props.setsignin({user:props.signin.user,password:props.signin.password,success:true})
        }
    }

    return(
        <div className="Signin">
            <label style={{fontSize:'120%'}}>User Name:</label>
            <input className="signin" type="text" onChange={handleUserChange}/>

            <label style={{fontSize:'120%'}}>Password:</label>
            <input className="signin" type="password" onChange={handlePasswordChange}/>

            <button className="Button" style={{padding:'2%',width:'20%',marginTop:'2%'}} onClick={check}>Signin</button>
        </div>
    )
}

export default SignIn

