import React,{useState} from "react";
function Login() {
    const[email,setEmail]=useState("")
    const[pass,setpass]=useState("")
function submitHandler() {
    if(email==="danielraj.i2020@gmail.com" & pass==="daniel@2021") 
    {
        alert("success")
    }
    else { 
        alert("failed")
    }    
}

return (
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="email"> Email:</label>
            <input type="text" value={email} onChange={(e)=>setEmail (e.target.value)}></input>
        </div>
        <div>   
            <label foremail="pass">enter the password</label>
            <input type="password" value={pass} onChange={(e)=>setpass (e.target.value)}></input>
       
        </div>
        <div>
            <button>submit</button>
        </div>
    </form>
)
}
export default Login