import React from 'react'
import './footer.scss'
export default function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet. Sed galisum fuga id quia cupiditate id consequatur sunt id recusandae libero? Et animi saepe ut omnis distinctio id molestiae laudantium a corrupti quia aut architecto esse. Quo recusandae veniam non consequuntur optio sed sunt dolorum.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet. Sed galisum fuga id quia cupiditate id consequatur sunt id recusandae libero? Et animi saepe ut omnis distinctio id molestiae laudantium a corrupti quia aut architecto esse. Quo recusandae veniam non consequuntur optio sed sunt dolorum.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">STORE</span>
          <span className="copyright">© Copyright 2023. All Rights Reserved </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" style={{background:"white"}} alt="" />
        </div>
      </div>
    </div>
  )
}
