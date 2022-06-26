import React from 'react'
import contact from './contact.jpg'
import'./App.css'
const Contact = () => {
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className='col-12 text-centre py-4 my-4'>
            <h1> Any question</h1>
            <hr />
          </div>
        </div>

        <div className='row'>
          <div className='col-md 5 d-flex justify-content-center ui1'>

            <img src={contact} alt="" ></img>
          </div>

          <div className='col-md-6'>
  <form>
  <div class="mb-3">
    <label for="exampleForm" class="form-label">Full Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleForm" class="form-label">email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-outline-success">Send Message</button>
</form>
</div>

        </div>
      </div></>
  )
}

export default Contact