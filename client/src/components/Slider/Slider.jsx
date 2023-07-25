import React, { useState } from 'react'
import './slider.scss'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined'
export default function Slider() {
    const [slide,setSlide] = useState(0);
    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];
    const prevSlide=()=>{
        setSlide(slide===0 ? 2 : (slide)=>slide-1);
    }
    const nextSlide=()=>{
        setSlide(slide===2 ? 0 : (slide)=>slide+1);
    }
  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${slide*100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}
