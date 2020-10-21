// const clock = document.querySelector(".clock");

// const testClock = () => {
//   const now = new Date();

//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();

//   const template = `
//     <span>${hours}</span> :
//     <span>${minutes}</span> :
//     <span>${seconds}</span>

// `;

//   clock.innerHTML = template;
// };

// setInterval(testClock, 1000);

const now = new Date();

console.log(dateFns.format(now, "YYYY"));
console.log(dateFns.format(now, "MMM"));
console.log(dateFns.format(now, "ddd"));

const before = new Date("October 21 2020 22:40:20");

console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));
