import { useEffect, useState } from "react";

const initialPosition = { x: null, y: null };

export default function MouseApp() {

  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
     const handleMouseMove = (e)=>{
        const {clientX,clientY} =e
        setPosition({
            x:clientX,
            y:clientY
        })
     } 
     window.addEventListener("mousemove", handleMouseMove)
  }, [])
  return (
    <div>
        <pre>
            {JSON.stringify(position, null, 2)}
        </pre>
    </div>
  )
}
