export function getFormatTime(time) {
  const newTime = new Date(time);
  const date =
    newTime.getDate() < 10 ? `${newTime.getDate()}` : newTime.getDate();
  const month =
    newTime.getMonth() + 1 < 10
      ? `0${newTime.getMonth() + 1}`
      : newTime.getMonth() + 1;
  const year = newTime.getFullYear();
  const hour = newTime.getHours();
  const minute = newTime.getMinutes();
  if (minute < 10) {    
    return `${hour}:0${minute} ${date}/${month}/${year}`;
  }
  return `${hour}:${minute} ${date}/${month}/${year}`;
}
