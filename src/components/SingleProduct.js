import React from 'react'
import '../App.css'
import Rating from './Rating';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';

const SingleProduct = () => {
  const [rating,setRating] = useState();
  const [counter, setCounter] = useState(0);
  return (
    <div>
        <nav>
            <i class="fa-solid fa-arrow-left cart_icon"></i>
            <i class="fa-solid fa-cart-plus cart_icon"></i>
          </nav>
          <div className='carousel'>
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              showThumbs={false}
              width="400px"
            >
              <div>
                <img src="http://cdn.onlinewebfonts.com/svg/img_40099.png" alt="Slide 1" />
              </div>
              <div>
                <img src="http://cdn.onlinewebfonts.com/svg/img_40099.png" alt="Slide 2" />
              </div>
              <div>
                <img src="http://cdn.onlinewebfonts.com/svg/img_40099.png" alt="Slide 3" />
              </div>
            </Carousel>
          </div>
          <div className='product-info'>
            <div className='product-none'>
              <p style={{color: "#00838f"}}>None</p>
              <Rating rating={rating} onClick={(i) => {setRating(i+1)}} style={{cursor: "pointer"}}/>
            </div>
            <div className='product-heading'>
              <h2>Incorporation of Public Company</h2>
            </div>
            <div className='product-price-container'>
              <h1 style={{fontSize: "36px"}}>&#8377;13499</h1>
              <p style={{color: "green", fontSize: "28px"}}>10% off</p>
            </div>
            <div className='product-mrp'>
              <p><s>M.R.P:&#8377;14999</s></p>
            </div>
            <div className='product-save'>
              <p style={{fontSize: "22px"}}>You Save <span style={{color: "green", fontSize: "25px", margin: "0 20px"}}> <b>&#8377;1500</b></span> <span style={{fontSize: "16px"}}>(Inclusive of all taxes)</span></p>
            </div>
            <div className='product-quantity'>
              <label htmlFor = "select" >Select Quantity : </label>
              <select id = "select">
                <option value="option1">None</option>
              </select>
            </div>
            <div className='product-stock'>
              <p style={{color: "green"}}><b>In Stock</b></p>
            </div>
            <div className='product-sold-by'>
              <p><b>Sold by <span style={{color: "#00838f"}}>Putatoe</span></b></p>
            </div>
          </div>
          <div className='wrapper-btns'>
            <button className='btn-share'><i class="fa-sharp fa-solid fa-share-nodes btn-icons"></i>Share</button>
            { !counter ? <button className="btn-add-to-cart" onClick={() => {setCounter(counter + 1)}}><i class="fa-solid fa-cart-plus btn-icons"></i>Add to Cart</button> : (
              <div className = 'btn-add-to-cart-div'>
                <button  className='btn-decrement' onClick={() => {if(counter > 0)setCounter( counter - 1)}}>-</button>
                <input type='number' value={counter} />
                <button className = 'btn-increment' onClick={() => {setCounter(counter + 1)}}>+</button>
              </div>
            )}
          </div>
          <div className='features-details'>
            <h2>Features & Details</h2>
            <p>null</p>
          </div>
          <div className='similar-products'></div>
      </div>
  )
}

export default SingleProduct