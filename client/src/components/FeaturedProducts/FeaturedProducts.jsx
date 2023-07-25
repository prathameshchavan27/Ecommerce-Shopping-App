import React from 'react'
import './featuredProducts.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'
export default function FeaturedProducts({type}) {
    const {data,loading,error} = useFetch(
      `/products?populate=*&[filters][type][$eq]=${type}`
    );
    console.log(data);
    return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
suspendisse ultrices gravida. Riss commodo viverra maecenas accumsan • lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {error 
        ? "Something went worng!" 
        : loading
        ? "loading"
        : data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}
