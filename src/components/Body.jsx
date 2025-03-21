import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { addUser } from "../utils/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const Body = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector((store) => store.user)

  const fetchUser = async () => {
    if(userData) return
    try{
        const res = await axios.get(BASE_URL + "/profile", {
               withCredentials: true
       })
       dispatch(addUser(res.data))
  }
  catch(err){
     if(err.status == 401){
       
           navigate("/login")
        
     }
     console.log(err)
  }

}

useEffect(() => {
     if(!userData){
       fetchUser()
     }
}, [] )

  return (
    <div>
       <Navbar />
       <Outlet />
    </div>
  )
}

export default Body
