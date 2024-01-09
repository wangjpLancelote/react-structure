import React, { useState } from 'react'

const CACHE_KEY = 'language_cache';

export interface LanguageContextType {
  language: string;
  operateLanguage: (lan: string) => void;
}

const LanguageContext = React.createContext<LanguageContextType>({ language: 'en-US', operateLanguage: () => null });

const LanguageContextProvider: React.FC<any> = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const languageSetting = localStorage.getItem(CACHE_KEY) || 'en-US';
    return languageSetting;
  })

  /** 切换语言 */
  const operateLanguage = (lan: string) => {
    setLanguage((prevState: any) => {
      localStorage.setItem(CACHE_KEY, lan)
      return lan;
    })
  }

  return (
    <LanguageContext.Provider value={{ language, operateLanguage }}>
      { children }
    </LanguageContext.Provider>
  )
}

export { LanguageContext, LanguageContextProvider }
