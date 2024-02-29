import React from 'react'
import EndPageLists from './EndPageLists'

function ListThree() {

    const heading = "Social Impact";
    const items = [
        "People",
        "Planet",
        "Environmental and Social Impact Reporting"
    ]
  return (
    <div className='list-three'>
    <EndPageLists heading={heading} items={items}/>
</div>  )
}

export default ListThree