import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Navbar.scss'
import { useSelector } from 'react-redux';
const Navbar = () => {
const [open, setOpen] = useState(false);
const products = useSelector((state) => state.cart.products);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          {/* <div className="item">
            <img src="" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownIcon />
          </div> */}
          <div className="item">
            <Link className="link" to="/products/1">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            SHOPY.com
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <AddShoppingCartIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
