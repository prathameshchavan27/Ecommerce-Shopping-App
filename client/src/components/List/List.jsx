import React from 'react'
import './list.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch';
export default function List({subCategory,maxPrice,sort,catId}) {
    const {data,loading,error} = useFetch(
      `/products?populate=*&[filters][categories][id]=${catId}${subCategory.map(
        (item)=>`&[filters][sub_categories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    );
    return (
    <div className='list'>
      {loading
      ? "loading"
      : data?.map(item=> <Card item={item} key={item.id}/>)}
    </div>
  )
}
