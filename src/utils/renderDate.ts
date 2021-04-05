/**
 * formats given date string into readable date
 * @param dateStr
 * @returns string
 */
export const renderDate = (dateStr: string) => {
  const createdDate = new Date(dateStr);
  //adding extra 1 since month starts from 0 in JS
  const month = createdDate.getMonth() + 1;
  let formattedMonth = month.toString();
  const year = createdDate.getFullYear();
  let day = createdDate.getDate().toString();

  //add 0 if month/date is single digit
  formattedMonth =
    formattedMonth.length === 1 ? `0${formattedMonth}` : formattedMonth;
  day = day.length === 1 ? `0${day}` : day;

  return `${day}/${formattedMonth}/${year}`;
};
