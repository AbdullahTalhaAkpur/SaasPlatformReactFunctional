import React from 'react'
import './exit.css'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Exit = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/')
  }
 
  return (
     <div onClick={handleLogout}>
       <span>{t('sidebar.exit')}</span>
     </div>
  )
}

export default Exit