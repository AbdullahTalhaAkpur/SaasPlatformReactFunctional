import React from 'react'
import './exit.css'
import { useNavigate } from 'react-router-dom'

const Exit = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('../Login/Login.jsx');
  }

  return (
      <button onClick={handleClick}>Exit</button>
  )
}

export default Exit