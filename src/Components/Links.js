import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
const pagesArray = ["and", "or", "xor", "ls", "rs"]

const Links = ({page}) => {
    let [pages, setPages] = useState(pagesArray)
  return (
    <div className='nav'>
        {pages.filter((item, index)=>{
            if(item !== page){
                return item
            }
        }).map((item, index)=>{
            return <button key={index}><Link  to={`/${item}`}>{item.toUpperCase()}</Link></button>
        })}
    </div>
  )
}

export default Links