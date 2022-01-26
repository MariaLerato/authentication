import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import UserDataServices from '../services/users'

const SignUp = () =>{
    const nav = useNavigate()
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [confirm,setConfirm] = useState()

    const handleChangeName = (e)=>{
        setName(e.target.value)
    }
    const handleChangeEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handleChangePassword = (e)=>{
        setPassword(e.target.value)
    }
    const handleChangeConfirm = (e)=>{
        setConfirm(e.target.value)
    }
  async function registerUser(e){
         e.preventDefault()
        const user = {name,email,password}
        console.log("user:",user)
        UserDataServices.createUser(user)
        .then(res=>console.log(res.data))
        nav('/signIn')
    }

    return(
        <>    
      <form onSubmit={registerUser}  style={{margin:'auto',padding:'auto',width:'50%',justifyContent:'center',marginTop:'10%'}}  >
      <h1>Sign Up Page</h1>
        <div className="form-group">
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Name"
          value={name}
          onChange={handleChangeName}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput2" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="Enter Email"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput3" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleFormControlInput3"
          placeholder="Enter Password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput4" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleFormControlInput4"
          placeholder="Enter Password"
          value={confirm}
          onChange={handleChangeConfirm}
        />
      </div>
     
 
      <div>
   <button type="submit" className="btn btn-primary" onClick={registerUser} >Submit</button>
      </div>
        </div>


      </form>
        </>
    )
}
export default SignUp