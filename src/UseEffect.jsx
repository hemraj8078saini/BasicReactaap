import  { useEffect, useState } from 'react'

const UseEffect = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
      alert("this is useEffect")  
    })
    useEffect(()=>{
        alert("this is amety array ")  
      },[])
      useEffect(()=>{
           alert("your state is change")
      },[count])
  return (
    <div>
    {count}
      <button onClick={(()=>{setCount(count+1)})}>updatavalue</button>
    </div>
  )
}

export default UseEffect
