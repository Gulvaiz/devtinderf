import React from 'react'
import Feed from './components/Feed'
import Login from './components/Login'
import { BrowserRouter, Routes , Route} from "react-router-dom"
import Body from './components/Body'
import Profile from './components/Profile'
import { Provider } from "react-redux"
import appStore from './utils/appStore'

const App = () => {
  return (
    <div>
 <Provider store={appStore}>
  <BrowserRouter>
         <Routes>
             <Route path='/' element={<Body />}>
                  <Route path='/' element={<Feed />} />
                  <Route path='/login' element={<Login />}/>
                  <Route path="/profile" element={<Profile />}/>
            </Route>
         </Routes>
  </BrowserRouter>
  </Provider>

        {/* <Navbar />
        <Login /> */}
    </div>
  )
}

export default App
