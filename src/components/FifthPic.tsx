import React from 'react'
import fifth from '../assets/fifth.jpg';

function FifthPic() {
  return (
    <div>
        <img src={fifth}
         alt='first image'
         style={
            {
                width: '700px',
                height: 'auto',
                position: 'absolute',
                top: '325%',
                left: '10%'
            }
         }
         />
    </div>
  )
}

export default FifthPic