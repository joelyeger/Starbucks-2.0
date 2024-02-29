import React from 'react'
import EndPageLists from './EndPageLists'

function ListOne() {

    const heading = "About Us";
    const items = ["Our Company",
    "Our Coffee",
    "Stories and News",
    "Starbucks Archive",
    "Investor Relations",
    "Customer Service",
    "Contact Us"
]
  return (
    <div className='list-one'>
        <EndPageLists heading={heading} items={items}/>
    </div>
  )
}

export default ListOne