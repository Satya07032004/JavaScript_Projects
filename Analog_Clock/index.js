let hourHand = document.querySelector(".hour-hand");
let minHand = document.querySelector(".min-hand");
let secHand = document.querySelector(".sec-hand");

let dhourHand = document.querySelector(".dh");
let dminHand = document.querySelector(".dm");
let dsecHand = document.querySelector(".ds");

setInterval(() => {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();

  // 1 hour = 30deg, 1 min = 0.5deg
  let hrotate = 30 * h + m / 2;
  // 1 min = 6deg
  let mrotate = 6 * m;
  // 1 sec = 6deg
  let srotate = 6 * s;

  // Added 'deg' unit to the rotation string
  hourHand.style.transform = `rotate(${hrotate}deg)`;
  minHand.style.transform = `rotate(${mrotate}deg)`;
  secHand.style.transform = `rotate(${srotate}deg)`;

  dhourHand.innerHTML = `${h}`;
  dminHand.style.innerHTML = `${m}`;
  dsecHand.innerHTML = `${s}`;
}, 1000);
