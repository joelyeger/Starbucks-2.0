import React from 'react';
import './styles.css'; // Import CSS styles

function GrayBox() {
  return (
    <div className="gray-box">
        <h2>“A smile makes a big</h2>
        <h2>difference.”</h2>

      <p>- Brenda, Starbucks Partner</p>
      <p>(Employee)</p>
      <p>Our partners uplift each other and</p>
      <p>their communities every day.</p>
      
      <button className='gray-button'>Learn more</button>
    </div>
  );
}

export default GrayBox;