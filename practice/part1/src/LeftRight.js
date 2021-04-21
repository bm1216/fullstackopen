import React, {useState} from 'react'

const LeftRight = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

  // const handleLeftClick = () => {
  //   setClicks({
  //     left: clicks.left + 1,
  //     right: clicks.right
  //   })
  // }

  // New object spread syntax
  const handleLeftClick = () => {
    setClicks({
      ...clicks,
      left: clicks.left + 1
    })
  }

  // const handleRightClick = () => {
  //   setClicks({
  //     left: clicks.left,
  //     right: clicks.right+1
  //   })
  // }

  const handleRightClick = () => {
    setClicks({
      ...clicks,
      right: clicks.right+1
    })
  }

  // This is actually far more suitable for this use case, since the other way just makes things more complex for no benefit. 
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {clicks.right}
    </div>
  )
}


export default LeftRight