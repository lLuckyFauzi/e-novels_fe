import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Signup = () => {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh'
    }}>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Signup