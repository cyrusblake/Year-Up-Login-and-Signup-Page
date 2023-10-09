import react from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Home from './pages/Home'

import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignUp/>}></Route>
          <Route path='SignUp' element={<SignUp/>}></Route>
          <Route path='LogIn' element={<LogIn/>}></Route>
          <Route path='Home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
