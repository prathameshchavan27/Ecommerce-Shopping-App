import React from 'react'
import {Link} from 'react-router-dom'
import './card.scss'
export default function Card({item}) {
  console.log(item);
  return (
    <Link to={`/product/${item.id}`} style={{textDecoration:'none',color:'black'}}>
    <div className='card'>
        <div className="images">
            {item?.attributes.isNew && <span>New Season</span>}
            <img src={
              process.env.REACT_APP_UPLOAD_URL+item.attributes?.img?.data?.attributes?.url
              } alt="" className="mainImg" />
            <img src={
              process.env.REACT_APP_UPLOAD_URL+item.attributes?.img2?.data?.attributes?.url
              } alt="" className="secondImg" />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
            <h3>${item.oldPrice || item?.attributes.price+15}</h3>
            <h3>${item?.attributes.price}</h3>
        </div>
    </div>
    </Link>
  )
}
