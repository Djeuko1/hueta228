const date = document.getElementById("date");
const month = document.getElementById("month");
const deliveryDate = document.getElementById("deliveryDate");

const dateMobile = document.getElementById("dateMobile");
const monthMobile = document.getElementById("monthMobile");
const deliveryDateMobile = document.getElementById("deliveryDateMobile");

const dayNames = [
    "Pazar",  // Воскресенье
    "Pazartesi",      // Понедельник
    "Salı",     // Вторник
    "Çarşamba",  // Среда
    "Perşembe",       // Четверг
    "Cuma",    // Пятница
    "Cumartesi"    // Суббота
  ];
  
const today = new Date();
var threeDaysLater = new Date(today);
threeDaysLater.setDate(today.getDate() + 3);

if (deliveryDate) {
    deliveryDate.innerHTML = threeDaysLater.getDate();
}

if (deliveryDateMobile) {
    deliveryDateMobile.innerHTML = threeDaysLater.getDate();
}

const threeDaysLaterMonth = new Intl.DateTimeFormat("tr", { month: "long" }).format(threeDaysLater);
const formattedMonth = threeDaysLaterMonth.charAt(0).toUpperCase() + threeDaysLaterMonth.slice(1);
if (month) {
    month.innerHTML = formattedMonth;
}
if (monthMobile) {
    monthMobile.innerHTML = formattedMonth;
}
const dayName = dayNames[threeDaysLater.getDay()];
if (date) {
    date.innerHTML = dayName;
}
if (dateMobile) {
    dateMobile.innerHTML = dayName;
}
