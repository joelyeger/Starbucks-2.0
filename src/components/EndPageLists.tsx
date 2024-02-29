import React from 'react'

interface Props{
    heading : string;
    items : string[];
}

function EndPageLists({heading, items}: Props) {
  return (
    <>
    <div>
    <h2>{heading}</h2>
    {items.map((item, index) => (
      <p key={index}>{item}</p>
      ))}    

    </div>
    </>
  )
}

export default EndPageLists