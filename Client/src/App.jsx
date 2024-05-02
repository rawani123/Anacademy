import './App.css'
import { Routes,Route } from 'react-router-dom'
import LoginPages from './components/auth/LoginPages'
import SignUPPage from './components/auth/SignUPPage'
import HomePage from './components/Homepage/HomePage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPages />} />
      <Route path='/signup' element={<SignUPPage />} />
    </Routes>
  )
}

export default App
