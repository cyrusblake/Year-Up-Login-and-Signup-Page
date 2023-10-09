import react from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

function App() {
  

  return (
    <>
    <div>
      <BrowserRouter>
          <Routes>
              <Route index element={<SignUp/>} />
              <Route path='SignUp' element={<SignUp/>}/>
              <Route path='LogIn' element={<LogIn/>} />
              <Route path='Home' element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </div>
      
    </>
  )
}

export default App
