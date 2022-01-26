import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import UserDataServices from '../services/users'
const SignIn = () =>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const LogIn = (e)=>{
        e.preventDefault()
        const u = {email,password}
        UserDataServices.log(u)
        .then(res=>console.log(res.data))

      
    }
    const handleChangeEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handleChangePassword = (e)=>{
        setPassword(e.target.value)
    }
   

    return(
        <>
                   
      <form  style={{margin:'auto',padding:'auto',width:'50%',justifyContent:'center',marginTop:'10%'}} onSubmit={LogIn}>
      <h1>Sign In Page</h1>
        <div className="form-group">
       
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Email"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
    
     
 
      <div>
 <Link to={'/signIn'}>      <button type="submit" className="btn btn-primary" >Submit</button></Link> 
      </div>
        </div>


      </form>
        </>
    )
}
export default SignIn