import React from 'react'
import './settings.css'
import UserProfile from './UserProfile'
import CompanyProfile from './CompanyProfile'
import ChangePassword from './ChangePassword'

const Settings = () => {
  return (
    <div className='settings-container'>
      <UserProfile />
      <CompanyProfile />
      <ChangePassword />
    </div>
  )
}

export default Settings