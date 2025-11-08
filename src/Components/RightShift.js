import React,{useState} from 'react'
import Links from './Links'
import InputElement from './InputElement'


const RightShift = () => {
    const [ans, setAns] = useState("")

    const handleAns = (ans) =>{
        setAns(ans)
    }
  return (
    <div>
        <Links page={"rs"}/>
        <InputElement operation={"rs"} handleAns={handleAns}/>
        Output: {ans}
    </div>
  )
}

export default RightShift