import { useState } from "react"
import axios from "axios"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    try{
      const res = await axios.post("http://localhost:7777/login", {
          email,
          password,
      })
    }
    catch(err){
       console.error(err)
    }
  }

  return (
    <div>
      
      <div className="card bg-base-100 w-96 shadow-sm m-auto">
  <div className="card-body">
    <h2 className="card-title">Login</h2>
    
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input type="text" className="input" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="text" className="input" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)}/>
</fieldset>

    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Login
