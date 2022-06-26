import React from 'react'
import Facebook from './Facebook.jpg'
import user from './user.png';
const Signup = () => {
  return (
    <>
    


    <button type="button" className="btn btn-outline-danger th" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Signup
      <img src={user}  alt=" "/>  
      </button>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Signup</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button className='btn btn-primary w-100 mb-4'>
<span  className="bi bi-google me-6 "></span>< img src="https://img.icons8.com/color/16/000000/google-logo.png"alt=" "/> Sign in with Google
              </button>
              <button className='btn btn-primary w-100 mb-4 ty'>
<span  className="bi bi-facebook me-6"></span><img src={Facebook}  alt=" "/> Sign in with Facebook
              </button>
              <div className="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-outline-primary w-100 mt-4">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    


    </>
  )
}

export default Signup;