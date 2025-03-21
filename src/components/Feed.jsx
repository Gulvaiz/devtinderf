import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice"
import { BASE_URL } from "../utils/constants"
import { useEffect } from "react"

const Feed = () => {

  const feed = useSelector((store) => store.feed)
  const dispatch = useDispatch()

  const getFeed = async () => {
    if(feed) return
    try{
      const res = await axios.get(BASE_URL + "/feed", {
         withCredentials: true
       })
       dispatch(addFeed(res.data))
    }
    catch(err){
      console.error(err.message)
    } 
  }

  useEffect( () => {
    getFeed()
  }, [])

  return (
    <div>Feed</div>
  )
}

export default Feed
