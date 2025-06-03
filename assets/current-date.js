const months = [
    "Ocak",   // Январь
    "Şubat",  // Февраль
    "Mart",     // Март
    "Nisan",    // Апрель
    "Mayıs",        // Май
    "Haziran",      // Июнь
    "Temmuz",      // Июль
    "Ağustos",     // Август
    "Eylül", // Сентябрь
    "Ekim",  // Октябрь
    "Kasım",  // Ноябрь
    "Aralık"   // Декабрь
  ];  
  
function generatePostDates(length) {
    const postDates = [];
    let currentDate = new Date();
    for (let i = 0; i < length; i++) {
        let postDate = new Date(currentDate);
        postDate.setDate(postDate.getDate() - i);
        postDates.push(postDate.toISOString().slice(0, 10));
    }
    return postDates;
}
const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dates = [];
let currentDate = document.querySelectorAll(".current_date");
let postDates = generatePostDates(currentDate.length);
for (let i = 0; i < postDates.length; i++) {
    let inc = i;
    if (i == 0) {
        inc = i + 1;
    }
    dates.push(`${months[new Date(postDates[i]).getMonth()]}, ${days[new Date().getDate() - inc] ?? days[days.length - 1] - inc} ${postDates[i].split("-")[0]}`);
}
currentDate.forEach((element, index) => (element.innerHTML = dates[index]));
