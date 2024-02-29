import React from 'react'
import forfth from '../assets/fourth.jpg';

function ForfthPic() {
  return (
    <div>
        <img src={forfth}
         alt='first image'
         style={
            {
                width: '700px',
                height: 'auto',
                position: 'absolute',
                top: '240%',
                left: '50%'
            }
         }
         />
    </div>
  )
}

export default ForfthPic