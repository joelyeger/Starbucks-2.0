import React from 'react'
import EndPageLists from './EndPageLists'

function ListFour() {
    const heading = "For Business Partner";
    const items = [
        "Landlord Support Center",
        "Suppliers",
        "Corporate Gift Card Sales",
        "Office and Foodservice Coffee"
    ]
  return (
    <div className='list-four'>
    <EndPageLists heading={heading} items={items}/>
</div>  )  
}

export default ListFour