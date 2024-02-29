import React from 'react'
import third from '../assets/third.jpg';

function ThirdPic() {
  return (
    <div>
        <img src={third}
         alt='third image'
         style={
            {
                width: '700px',
                height: 'auto',
                position: 'absolute',
                top: '155%',
                left: '10%'
            }
         }
         />
    </div>
  )
}

export default ThirdPic