import React from 'react'
import Header from '../Headers/Header'
import Banner from '../Banner/Banner'

import image from '../../assets/card.jpg';
import { Link } from 'react-router-dom';

import './Products.css';
import About from '../About/About';
import Footer from '../Footer/Footer';

const product_array = [1, 2, 3, 4];

const Products = () => {
  return (
    <>
        <Header />
        <Banner />
        <div className='products'>
            <div className="container">
                <div className="title">
                    <h1>Products</h1>
                </div>
                <div className="display_products">
                    {product_array.map(product => {
                        return (
                            <div className="card">
                                <div className="card_img">
                                    <div className="overlay_price">$50</div>
                                    <img height='100%' width='100%' src={image} alt="product" />
                                </div>
                                <div className="card_action">
                                    <h5>the world of art</h5>
                                    <input type="number" value='1' />
                                    <Link to=''>Add To Cart</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="load_more">
                    <Link to=''>load more</Link>
                </div>
            </div>
        </div>
        <About />
        <Footer />
    </>
  )
}

export default Products