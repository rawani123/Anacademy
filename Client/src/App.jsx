import './App.css'
import { Routes,Route } from 'react-router-dom'
import LoginPages from './components/auth/LoginPages'
import SignUPPage from './components/auth/SignUPPage'
import HomePage from './components/Homepage/HomePage'
import Optionpage from './components/auth/OptionPage'
import TeacherSignup from './components/auth/TeacherSignup'


function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPages />} />
      <Route path='/signup-as' element={<Optionpage />} />
      <Route path='/signup/student' element={<SignUPPage />} />
      <Route path='/signup/teacher' element={<TeacherSignup/>} />
    </Routes>
  )
}

export default App
