import React from 'react';
import { useTranslation } from 'react-i18next';
import  enFlag from  '../components/assets/eng.png'
import trFlag from '../components/assets/türk.png'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div className="language-switcher">
      <img src={enFlag}
      alt='English'
      onClick={() => changeLanguage('en')}
      className='language-icon'
      />
      <img src={trFlag}
      alt='Türkçe'
      onClick={() => changeLanguage('tr')}
      className='language-icon'
      />
    </div>
  );
};

export default LanguageSwitcher;