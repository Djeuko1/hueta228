// const stockTime = document.getElementById("stockTime");
// const stockTime1 = document.getElementById("stockTime1");
let orderWithin;
if (document.getElementById("orderWithin")) {
    orderWithin = document.getElementById("orderWithin");
}

let orderWithinMobile;

if (document.getElementById("orderWithinMobile")) {
    orderWithinMobile = document.getElementById("orderWithinMobile");
}

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return { t, days, hours, minutes, seconds };
}

const digitFormatter = (digit) => {
    if (digit < 10) {
        return `0${digit}`;
    }
    return digit;
};
function initializeClock(id, endtime) {
    setInterval(function () {
        // const clock = document.getElementById("stockTime");

        let clock;
        if (document.getElementById("stockTime")) {
            clock = document.getElementById("stockTime");
        }


        // const clock1 = document.getElementById("stockTime1");
        const { hours, minutes, seconds } = getTimeRemaining(endtime);
        const time = `
            <span class="hours">${digitFormatter(hours)}</span>:
            <span class="minutes">${digitFormatter(minutes)}</span>:
            <span class="seconds">${digitFormatter(seconds)}</span>
        `;

        if (orderWithin) {
            orderWithin.innerHTML = `${hours + 3} hrs ${Math.abs(minutes)} min`;
        }
        if (orderWithinMobile) {
            orderWithinMobile.innerHTML = `${hours + 3} hrs ${Math.abs(minutes)} min`;
        }

        if (seconds < 0) {
            if (clock) {
                clock.innerHTML = `<div class="flex items-center sT w-22 gap-0.5"><div class="flex w-7 h-6 shadow text-[18px] bg-white items-center justify-center rounded text-black">00</div>:<div class="flex w-7 text-black h-6 shadow bg-white items-center text-[18px] justify-center rounded">00</div>:<div class="flex text-[18px] w-7 h-6 text-black shadow bg-white items-center justify-center rounded">00</div></div>`;
                // clock1.innerHTML = `<div class="flex items-center sT w-22 gap-0.5"><div class="flex w-7 h-6 shadow text-[18px] bg-white items-center justify-center rounded text-black">00</div>:<div class="flex w-7 text-black h-6 shadow bg-white items-center text-[18px] justify-center rounded">00</div>:<div class="flex text-[18px] w-7 h-6 text-black shadow bg-white items-center justify-center rounded">00</div></div>`;
            }
            
        } else {
            if (clock) {
                clock.innerHTML = time;
                // clock1.innerHTML = time;
            }
        }
    }, 1000);
}
const monthsF = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
const endDate = new Date().getDate();
const endMonth = new Date().getMonth();
const endYear = new Date().getFullYear();
const endtime = new Date(endYear, endMonth, endDate, 23, 59, 59);

initializeClock("stockTime", endtime);
initializeClock("stockTime1", endtime);
