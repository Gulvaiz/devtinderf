import React from 'react'
import Navbar from './Navbar'
import Login from './Login'
import { BrowserRouter, Routes , Route} from "react-router-dom"
import Body from './Body'

const App = () => {
  return (
    <div>
{/* 
  <BrowserRouter>
         <Routes>
         
             <Route path='/body' element={Body}>
                  <Route path='/login' element={Login}/>
            </Route>
         </Routes>
  </BrowserRouter> */}

        <Navbar />
        <Login />
    </div>
  )
}

export default App
