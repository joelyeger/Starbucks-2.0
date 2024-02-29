import React from 'react'
import second from '../assets/second.jpg';

function SecondPic() {
  return (
    <div>
        <img src={second}
         alt='second image'
         style={
            {
                width: '700px',
                height: 'auto',
                position: 'absolute',
                top: '70%',
                bottom: '300px',
                left: '50%'
            }
         }
         />
    </div>
  )
}

export default SecondPic