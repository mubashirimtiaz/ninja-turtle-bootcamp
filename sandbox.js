console.log("Date");

const now = new Date();

console.log(now, typeof now);

console.log("getFullYear", now.getFullYear());
console.log("getMonth", now.getMonth());
console.log("getDate", now.getDate());
console.log("getHours", now.getHours());
console.log("getMinutes", now.getMinutes());
console.log("getSeconds", now.getSeconds());

//timestamps
console.log("timestamps", now.getTime());

//date strings

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

//timestamp

const before = new Date("August 3 2020 6:40:50");

const diff = now.getTime() - before.getTime();

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
console.log(mins);
console.log(hours);
console.log(days);

console.log(`this post was posted ${days} ago`);

//converting timestmaps into date obj
const timestamp = 44575365644;
console.log(new Date(timestamp));
