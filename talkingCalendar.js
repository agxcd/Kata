const talkingCalendar = function (date) {
  // Your code here
  let arr = date.split("/");
  let year = arr[0];
  let month = arr[1];
  let day = parseInt(arr[2]);

  switch (month) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
    default:
      month = "";
  }

  switch (day) {
    case 1:
      day = "1st";
      break;
    case 2:
      day = "2nd";
      break;
    case 3:
      day = "3rd";
      break;

    default:
      day = day + "th";
  }

  return month + " " + day + " " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987
