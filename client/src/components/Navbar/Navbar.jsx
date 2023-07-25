import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
export default function Navbar() {
  const products = useSelector(state=>state.cart.products)
  const [open,setOpen] = useState(false);  
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
            <div className="item">
                <img src="/img/en.png" alt="" width={30} height={20} />
                <KeyboardArrowDownIcon/>
            </div>
            <div className="item">
                <span>INR</span>
                <KeyboardArrowDownIcon/>
            </div>
            <div className="item">
                <Link className='link' to="/products/1">Men</Link>
            </div>
            <div className="item">
                <Link className='link' to="/products/2">Women</Link>
            </div>
            <div className="item">
                <Link className='link' to="/products/3">Children</Link>
            </div>
        </div>
        <div className="center">
            <Link className='link' to="/">STORE</Link>
        </div>
        <div className="right">
            <div className="item">
                <Link className='link' to="/products/3">HomePage</Link>
            </div>
            <div className="item">
                <Link className='link' to="/products/3">About</Link>
            </div>
            <div className="item">
                <Link className='link' to="/products/3">Contact</Link>
            </div>
            <div className="item">
                <Link className='link' to="/products/3">Stores</Link>
            </div>
            <div className="icons">
                <SearchIcon/>
                <PersonOutlineOutlinedIcon/>
                <FavoriteBorderOutlinedIcon/>
                <div className="cartIcon" onClick={()=>setOpen(!open)}>
                    <ShoppingCartOutlinedIcon/>
                    <span>{products.length}</span>
                </div>
            </div>
        </div>    
      </div>
      {open && <Cart/>}
    </div>
  )
}
