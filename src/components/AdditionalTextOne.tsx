import React from 'react';
import './styles.css'; // Import CSS styles

interface Prop {
  items: string[];
}

function AdditionalTextOne({items}: Prop) {
  /*
const items = ["*At participating stores only. Some restrictions apply. Linked Card members",
"will earn 2% Cash Back on the full purchase price of every Qualifying Purchase.",
"Bonus Star offer excludes taxes and tips. Stars may not be earned on purchases",
"of alcohol or on reloads of Starbucks Cards that are not registered. For full",
"details, visit www.starbucks.com/bofa. Bank of America, N.A. Member FDIC."
]*/

  return (
    <div className="additional-text">
      {items.map((item, index) => (
      <p key={index}>{item}</p>
      ))}    
    </div>
  );
}

export default AdditionalTextOne;