import React from 'react'
import './loading.css'
function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loading
