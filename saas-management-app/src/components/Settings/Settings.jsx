import React from 'react'
import './settings.css'
import UserProfile from './UserProfile'
import CompanyProfile from './CompanyProfile'

const Settings = () => {
  return (
    <div className='settings-container'>
      <UserProfile />
      <CompanyProfile />
    </div>
  )
}

export default Settings