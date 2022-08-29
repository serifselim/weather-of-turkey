import React from 'react'

const Loading = () => {
  return (
    <div
      className="spinner-border text-warning"
      style={{ width: '5rem', height: '5rem', borderWidth: '10px' }}
      role="status"
    />
  )
}

export default Loading
