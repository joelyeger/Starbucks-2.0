import React from 'react'
import first from '../assets/first.jpg';

function FirstPic() {
  return (
    <div>
        <img src={first}
         alt='first image'
         style={
            {
                width: '700px',
                height: 'auto',
                position: 'absolute',
                top: '15%',
                left: '10%'
            }
         }
         />
    </div>
  )
}

export default FirstPic