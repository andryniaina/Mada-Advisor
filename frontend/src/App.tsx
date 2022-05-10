import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Navbar from './components/navbar/Navbar'
import Forum from './pages/forum/forum'
import Accueil from './pages/home/Accueil'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Router>
        <>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Accueil />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forum' element={<Forum />} />
          </Routes>
          <Footer/>
        </>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
