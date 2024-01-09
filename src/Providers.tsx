import { Provider } from 'react-redux';
import store from './state/index'
import { IntlProvider } from 'react-intl';
import { ConfigProvider } from 'antd';
import { LanguageContextProvider } from './LanguageContext';
import { ThemeContextProvider } from './ThemeContext';
import { getLocale, TLanguage } from './lang/localeConfig';

const currentLang = (window.localStorage.getItem('language_cache') || 'en-US') as TLanguage;
const appLocale = getLocale(currentLang);

const Providers: React.FC<any> = ({ children }) => {
  return (
    <Provider store={ store }>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <IntlProvider messages={ appLocale.messages } locale={ appLocale.locale }>
            <ConfigProvider locale={ appLocale.antd }>
              { children }
            </ConfigProvider>
          </IntlProvider>
        </ThemeContextProvider>
      </LanguageContextProvider>
    </Provider>
  )
}

export default Providers;