import loginImg from '../../img/register.png'
import './Register.css';
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../../features/auth/authSlice'
import Spinner from '../../components/Spinner'


function Register()  {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

    return (
<div className="login">

<section class="vh-100">
  <div class="container-fluid h-custom login-content">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={onSubmit}> 
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign up </p>
          </div>

    
       
          <div class="form-outline my-4">
            <input type="text" id="form3Example3" class="form-control form-control-lg"
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange} />
            <label class="form-label" for="form3Example3">Name</label>
          </div>

          <div class="form-outline my-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange} />
            <label class="form-label" for="form3Example3">E-mail</label>
          </div>

          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}/>
            <label class="form-label" for="form3Example4">Password</label>
          </div>
          
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={onChange}/>
            <label class="form-label" for="form3Example4">Confirm Password</label>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="submit" class="btn btn-secondary btn-lg btn_style_login"
              >Register</button>
          </div>

        </form>
      </div>
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src={loginImg}
          class="img-fluid" alt="Sample image"/>
      </div>
    </div>
  </div>

</section>


      </div>
    
    );
  }

export default Register;
