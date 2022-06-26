import React, { useState } from 'react'
import DATA from './Data'
import { Link } from 'react-router-dom'
import './App.css';
const Product = () => {

  const [noOfElement, setnoOfElement] = useState(3);
const loadmore=()=>{
  setnoOfElement(noOfElement+noOfElement)
}
  const slice = DATA.slice(0, noOfElement)


  const [filter, setFilter] = useState('');

    const  searchText = (event) => {
    setFilter(event.target.value.toString().toLowerCase());
  }
  let dataSearch1 = slice.filter(item => {
    return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter))
  });

  const cardItem = (item) => {
    return (
      <div className="card hy" key={item.id} style={{ width: "20rem" }} >
        <Link to={`/products/${item.id}`} className="card-img-top uo d-flex justify-content-center"> <img src={item.image} alt=" " /></Link>
        <div className="card-body">
          <h5 className="card-title"> Price: ${item.price}</h5>
          <Link to={`/products/${item.id}`} className="btn btn-outline-primary ">Add to Cart</Link>
          <Link to="/checkout" className="btn btn-outline-success ms-4">Buy Now</Link>

        </div>
      </div>
    );
  }
  return (
    <>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>I-phone</h1>
            <hr />

          </div>
        </div>
        <div className='container'>
          <div className='row justify-content-around'>

            {dataSearch1.map(cardItem)}
  
          </div>
        </div>
       
             </div>
         <div className='text-center'><button className='btn btn-outline-dark' onClick={()=>loadmore()}>Load More</button> </div>

    </>
  )
}
export default Product