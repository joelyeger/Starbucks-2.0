import React from 'react'
import EndPageLists from './EndPageLists'

function ListFive() {

    const heading = "Order and Pick Up";
    const items = [
        "Order on the App",
        "Order on the Web",
        "Delivery",
        "Order and Pick Up Options",
        "Explore and Find Coffee for Home"
    ]
  return (
<div className='list-five'>
    <EndPageLists heading={heading} items={items}/>
</div>   )
}

export default ListFive