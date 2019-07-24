import dateFormat from 'date-fns/format';

const DATE_FORMAT_STRING = 'YYYY-MM-DD';

export default function foramt(val) {
  return dateFormat(val, DATE_FORMAT_STRING);
}
