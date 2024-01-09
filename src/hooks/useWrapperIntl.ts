import { useIntl  } from 'react-intl';

/** useWrapperIntl hooks
 *  id: international message
 */
export default function useWrapperIntl () {
  const intl = useIntl();
  const wrapperIntl = (id: string, option?: any) => {
    const text = intl.formatMessage({
      id,
      defaultMessage: 'loading',
    }, option);
    return text;
  }
  return { wrapperIntl }
}