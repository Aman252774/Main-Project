import React,{useState} from 'react'
import Links from './Links'
import InputElement from './InputElement'


const Xor = () => {
    const [ans, setAns] = useState("")

    const handleAns = (ans) =>{
        setAns(ans)
    }
  return (
    <div>
        <Links page={"xor"}/>
        <InputElement operation={"xor"} handleAns={handleAns}/>
        Output: {ans}
    </div>
  )
}

export default Xor