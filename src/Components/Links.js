import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
const pagesArray = ["and", "or", "xor", "ls", "rs"];

const Links = ({ page }) => {
  const [pages] = useState(pagesArray);

  return (
    <div className='nav'>
      {pages
        .filter(item => item !== page)
        .map((item, index) => (
          <button key={index}>
            <Link to={`/${item}`}>{item.toUpperCase()}</Link>
          </button>
        ))}
    </div>
  );
};

export default Links