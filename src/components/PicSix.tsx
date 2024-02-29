import React from 'react'
import six from "../assets/six.jpg"

function PicSix() {
  return (
    <div>
        <img src={six}
         alt='six image'
         style={
            {
                width: '250px',
                height: 'auto',
                position: 'absolute',
                top: '485%',
                left: '10%'
            }
         }
         />
    </div>
  )
}

export default PicSix