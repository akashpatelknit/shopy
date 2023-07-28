import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Child</span>
          <span>Accessories</span>
          <span>New Arriwal</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stories</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsa soluta temporibus. Rerum in, dolorem exercitationem, veniam fuga nostrum labore ab voluptatum totam impedit nemo eius numquam excepturi eaque ad.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum unde omnis sapiente rem. Harum eum pariatur animi sed ipsam commodi nostrum sapiente at obcaecati eligendi! Vitae culpa aliquid neque. Beatae.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">LamaStore</span>
          <span className="copyright">
            © 2021 Lama Store. All rights reserved
          </span>
        </div>
        <div className="right">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer