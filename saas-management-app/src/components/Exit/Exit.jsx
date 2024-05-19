import React from 'react'
import './exit.css'
import { useNavigate } from 'react-router-dom'

const Exit = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/')
  }
 
  return (
     <div onClick={handleLogout}>
       <span>Çıkış</span>
     </div>
  )
}

export default Exit