import React from 'react'

import { Signin } from './pages/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import Dashboard from './pages/Dashboard'

const App = () => {
  return <BrowserRouter>
           <Routes>
              <Route path='/' element={<Signup/>}></Route>
              <Route path='/signin' element={<Signin/>}></Route>
              <Route path='/dashboard' element={<Dashboard/>}></Route>
            </Routes>
          </BrowserRouter>
}

export default App
