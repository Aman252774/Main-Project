import React,{useState} from 'react'
import Links from './Links'
import InputElement from './InputElement'


const Or = () => {
    const [ans, setAns] = useState("")

    const handleAns = (ans) =>{
        setAns(ans)
    }
  return (
    <div>
        <Links page={"or"}/>
        <InputElement operation={"or"} handleAns={handleAns}/>
        Output: {ans}
    </div>
  )
}

export default Or