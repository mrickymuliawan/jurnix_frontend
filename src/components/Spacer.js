import React from 'react'

function Spacer({ size = 1 }) {
  let margin

  switch (size) {
    case 1:
      margin = 8
      break;
    case 2:
      margin = 12
      break;
    case 3:
      margin = 16
      break;
  }

  return (
    <div style={{ marginBottom: margin }}>

    </div>
  )
}

export default Spacer
