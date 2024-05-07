import './App.css'
import { Routes,Route } from 'react-router-dom'
import LoginPages from './components/auth/student/LoginPages'
import SignUPPage from './components/auth/student/SignUPPage'
import HomePage from './components/Homepage/HomePage'
import Optionpage from './components/auth/OptionPage'
import TeacherSignup from './components/auth/teacher/TeacherSignup'
import LoginOption from './components/auth/LoginOption'
import TeacherLogin from './components/auth/teacher/TeacherLogin'


function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login/student' element={<LoginPages />} />
      <Route path='/login/teacher' element={<TeacherLogin/>} />
      <Route path='/signup-as' element={<Optionpage />} />
      <Route path='/login-as' element={<LoginOption />} />
      <Route path='/signup/student' element={<SignUPPage />} />
      <Route path='/signup/teacher' element={<TeacherSignup/>} />
    </Routes>
  )
}

export default App
