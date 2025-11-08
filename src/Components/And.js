import React,{useState} from 'react'
import InputElement from './InputElement'
import Links from './Links'


const And = () => {
    const [ans, setAns] = useState("")

    const handleAns = (ans) =>{
        setAns(ans)
    }
  return (
    <div>
        <Links page={"and"}/>
        <InputElement operation={"and"} handleAns={handleAns}/>
           <span className='output'>Output: <span className='output-value'>{ans}</span></span>

    </div>
  )
}

export default And