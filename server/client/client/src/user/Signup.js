import React, { useState, useEffect } from 'react'
import Base from "../core/Base";
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'


const SignUp = () => {
    const history = useHistory()
    const [name, setName] = useState ("")
    const [password, setPassword] = useState ("")
    const [email, setEmail] = useState ("")
    
    const uploadFields = () => {
            if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
                M.toast({html: "email Invalid", classes : "#c62828 red darken-3"})
                return 
            }


            //our server sending request in port 3001 but out frntend is running on port 3000
            //we added proxy server in package.json so that it is sending the internal reqest to 
            //and fooling react that our frontend is working on port 3000 but it is internally working on 
            //3001
            fetch ("/signup", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    name,
                    password,
                    email
                    // pic:url
                })
            }).then(res=> res.json())
            .then(data=>{
                if (data.error){
                    M.toast({html: data.error,classes:"#c62828 red darken-3"})
                }else {
                    M.toast({html:data.message, classes : "#43a047 green darken-1"})
                    history.push('/signin')
                }
                console.log(data)
            }).catch(err => {
                console.log (err)
            })
        
    }
    const PostData = ()  => {
        // if (image) {
        //     uploadPic()
        // } else {
            uploadFields()
        // }
    }
    const signUpForm = () => {
        return (
            <div className = "row">
                <div id = "signupform" className = "col-md-6 offset-sm-3 text-left"> 
                <form>
                    <div className = "form-group">
                        <label className="text-light">Name</label>
                        <input className = "form-control"  type = "text" 
                            placeholder = "name" 
                            value = {name}
                            onChange = {(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className = "form-group">
                        <label className="text-light">Email</label>
                        <input className="form-control" type = "text" 
                        placeholder = "email"
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-light">Password</label>
                        <input className="form-control" type = "password" 
                        placeholder = "password"
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success btn-block" 
                        onClick = {()=> PostData()}
                    >
                        SignUp
                    </button>
                    <h5>
                        <Link to = "/signin" >Have an account?</Link>
                    </h5>
                </form>
                </div>
            
            </div>
        )
    }

    return (
        <Base title = "Sign Up Page"  description = "A page to SignUp"> 
            {signUpForm()}
        </Base>
    )
}

export default SignUp