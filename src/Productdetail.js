import React from 'react'
import {useParams} from 'react-router'
import DATA from './Data';
import {useDispatch} from'react-redux';
import { addItem } from './redux1';
import { delItem } from './redux1';
import'./App.css';
import{useState} from 'react';
const Productdetail = () => {
    const [cartBtn,setCartBtn]=useState("Add to Cart");
    const proid=useParams();
const proDetail=DATA.filter(x=>x.id ==proid.id)
const product = proDetail[0];

const dispatch=useDispatch()

const handleCart =(product)=>{
if(cartBtn==="Add to Cart"){
dispatch(addItem(product))

setCartBtn("Remove from Cart")

}
else{
    dispatch(delItem(product))

    setCartBtn("Add to Cart")
}
}

  return (
    <>
    <div className='container my-3 py-3'>

        <div className='row'>
            <div className='col-md-6 d-flex justify-content-center yu mt-2 mx-auto product'>
                <img src={product.image} alt=""></img>
            </div>
            <div className='col-md-6'>
                <h1 className='display-5 fw-bold'>{product.title}</h1>
                <hr/>
                <h2>Price:${product.price}</h2>
<p className='lead'>{product.about}</p>
<button  onClick={()=>handleCart(product)
}className="btn btn-outline-success w-100 my-3">{cartBtn}</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Productdetail