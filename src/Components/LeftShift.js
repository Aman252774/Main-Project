import React,{useState} from 'react'
import Links from './Links'
import InputElement from './InputElement'

const LeftShift = () => {
    const [ans, setAns] = useState("")

    const handleAns = (ans) =>{
        setAns(ans)
    }
  return (
    <div>
        <Links page={"ls"}/>
        <InputElement operation={"ls"} handleAns={handleAns}/>
        Output: {ans}
    </div>
  )

}

export default LeftShift