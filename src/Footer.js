import React from 'react';
import "./App.css";
const Footer = () => {
  return (
    <>
      <div className='pt'>
        <div class="row ms-3 mt-4 text-info">
          <div class="col-6 col-md-2 mb-3 mt-2">
            <h5>Section</h5>
            <ul class="nav flex-column mt-2">
              <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Home</a></li>
              <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Features</a></li>
              <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Pricing</a></li>
              <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">FAQs</a></li>
              <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">About</a></li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3 mt-2">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Home</a></li>
              <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Features</a></li>
              <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Pricing</a></li>
              <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">FAQs</a></li>
              <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">About</a></li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3 mt-2">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Home</a></li>
              <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Features</a></li>
              <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Pricing</a></li>
              <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">FAQs</a></li>
              <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">About</a></li>
            </ul>
          </div>

          <div class="col-md-5 offset-md-1 mb-3 mt-2 bg">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" class="form-control kl" placeholder="Email address" />
                <button class="btn btn-primary kl" type="button">Subscribe</button>
              </div>
            </form>
          </div>


        </div>

      </div>

    </>
  )
}

export default Footer