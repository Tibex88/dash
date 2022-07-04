import React from 'react'



function Button({text, bgcolor,size,borderRadius, color}) {
  return (
    <button
    type="button"
    style={{borderRadius, backgroundColor:bgcolor, color }}
    className={`text-${size} p-3 hover:drop-shadow-xl`}>
      {text}
    </button>
  )
}

export default Button