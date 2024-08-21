import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <Select
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="tr">Turkish</MenuItem>
    </Select>
  );
};

export default LanguageSelector;