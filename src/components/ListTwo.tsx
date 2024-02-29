import React from 'react'
import EndPageLists from './EndPageLists'

function ListTwo() {

    const heading = "Careers";
    const items = [
        "Culture and Values",
        "Iclusion, Diversity, and Equity",
        "College Achievement Plan",
        "Alumni Community",
        "U.S. Careers",
        "International Careers"
    ]


  return (
    <div className='list-two'>
        <EndPageLists heading={heading} items={items}/>
    </div>
  )
}

export default ListTwo