import React from 'react'
import Facebook from './Facebook.jpg'
import login from './login.png';
import './App.css'
const Login = () => {
  return (
    <>
      <button type="button" class="btn btn-outline-success th" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Login
      <img src={login}  alt=" "/>  
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <button className='btn btn-primary w-100 mb-4'>
<span  className="bi bi-google me-6 "></span>< img src="https://img.icons8.com/color/16/000000/google-logo.png"alt=" "/> Sign in with Google
              </button>
              <button className='btn btn-primary w-100 mb-4 ty'>
<span  className="bi bi-facebook me-6"></span><img src={Facebook}  alt=" "/> Sign in with Facebook
              </button>
              <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-outline-primary w-100 mt-4">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Login