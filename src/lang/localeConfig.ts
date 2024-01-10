import antdUS from 'antd/locale/en_US'; // 美式英语
import antdCN from 'antd/locale/zh_CN'; // 简体
import antdTW from 'antd/locale/zh_TW'; // 繁体
import antdEG from 'antd/locale/ar_EG'; // 阿拉伯语
import antdDE from 'antd/locale/de_DE'; // 德语
import antdGB from 'antd/locale/en_GB'; // 英式英语
import antdES from 'antd/locale/es_ES'; // 西班牙语
import antdFR from 'antd/locale/fr_FR'; // 法语(法国)
import antdFBE from 'antd/locale/fr_BE'; // 法语(比利时)
import antdIN from 'antd/locale/hi_IN'; // 印地语
import antdJP from 'antd/locale/ja_JP'; // 日语
import antdTH from 'antd/locale/th_TH'; // 泰语
import antdKR from 'antd/locale/ko_KR'; // 朝鲜语
import antdRU from 'antd/locale/ru_RU'; // 俄语
import antdID from 'antd/locale/id_ID'; // 印度尼西亚语

import zh_CN from './zh_CN';
import en_US from './en_US';
import ar_EG from './ar_EG';

export type TLanguage = 'zh-CN' | 'en-US' | 'zh-TW' | 'ar-EG' | 'de-DE' | 'en-GB' | 'es-ES' | 'fr-FR' | 'fr-BE' | 'hi-IN' | 'ja-JP' | 'th-TH' | 'ko-KR' | 'ru-RU' | 'id-ID';

/** 针对语言包的多层级 */
export const compile = function loop (message: any, pids?: any) {
  let result: any = {};
  for (const [ id, msg ] of Object.entries(message)) {
    if (typeof msg === 'object') {
      result = {
        ...result,
        ...loop(msg, pids ? [pids, id] : id),
      }
    } else {
      result[pids ? [...(typeof (pids) === 'string' ? [pids] : pids), id].join('.') : id] = msg
    }
  }
  return result;
}

/** 美英 */
export const en_US_config = {
  messages: compile(en_US),
  locale: 'en-US',
  antd: antdUS,
}

/** 简体中文 */
export const zh_CN_config = {
  messages: compile(zh_CN),
  locale: 'zh-CN',
  antd: antdCN,
}

/** 阿拉伯语 */
export const ar_EG_config = {
  messages: compile(ar_EG),
  locale: 'ar-EG',
  antd: antdEG,
}

/** 德语 */
export const de_DE_config = {
  messages: compile({}),
  locale: 'de-DE',
  antd: antdDE,
}

/** 返回语言包config */
export const getLocale = (language?: TLanguage | string) => {
  switch (language) {
    case 'zh-CN':
      return zh_CN_config;
      break;
    case 'en-US':
      return en_US_config;
      break;
    case 'ar-EG':
      return ar_EG_config;
      break;
    case 'de-DE':
      return de_DE_config;
      break;
    default:
      return zh_CN_config;
  }
}