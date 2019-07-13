function formatTime(minutes) {
  let hoyrMinutes = 60;
  let dayTime = 1440;
  let days = parseInt(minutes / dayTime);
  let hours = parseInt((minutes % dayTime) / hoyrMinutes);
  minutes = minutes - days * dayTime - hours * hoyrMinutes;
  return days + "day(s)" + hours + "hour(s)" + minutes + "minute(s)";
}
formatTime(120);