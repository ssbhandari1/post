
import axios from 'axios'
import React, { useEffect } from 'react'
import Home from './component/Home'
import { useDispatch } from 'react-redux'
import { savePostData } from './redux/PostSlice'



const Base_url=`https://jsonplaceholder.typicode.com/comments`

const App = () => {
  const dispatch=useDispatch()
  
const fetchDataApi=async()=>{
  try {
    const response=await axios.get(Base_url)
    
    dispatch(savePostData(response.data))
  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
  fetchDataApi()
},[])

  return (
    <div>
   
      <Home/>
    </div>
  )
}

export default App