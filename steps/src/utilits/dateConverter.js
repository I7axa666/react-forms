export default function dateConverter(date, type=2) {
  // console.log(type)
  const formatDate = date.getDate() < 10 ? `0${date.getDate()}`:date.getDate();
  const formatMonth = date.getMonth() < 10 ? `0${date.getMonth() + 1}`: date.getMonth() + 1;

  if (type === 1) {
    return [formatDate, formatMonth, date.getFullYear()].join('.');
  } else {
    return [date.getFullYear(), formatMonth, formatDate].join('-');
  }
}