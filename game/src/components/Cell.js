import React, { useState, useEffect, useRef } from "react";

function Cell(props) {
  const [color, setColor] = useState()

  const prevColor = usePrevious(color)
  console.log(prevColor);
  

  function usePrevious(color) {
    // ref is an object that can hold any value
    const ref = useRef()
    // store current value in ref
    useEffect(() => {
      ref.current = color
    }, [color])  // only re-run if value changes
    // return previous value (this happens before update in usEffect above)
    return ref.current
  }

  const handleClick = () => {
    // console.log("Clicked", props.color);
    console.log("Second log:", prevColor);
    
  }

  return (
    <div className="grid-cell" style={{ background: props.color }} onClick={handleClick}>
    </div>
  );
}

export default Cell;
