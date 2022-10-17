const wrapperElem = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

let prev = 1;
const uniqueRand = (min, max, prev) => {
  let next = prev;
  while (prev == next) next = rand(1, 6);
  return next;
};

// setInterval(() => {
//   let prev = 1;
//   if (prev == rand(1, 6)) {
//     rand(1, 6);
//   } else {
//     wrapperElem.dataset.configuration = rand(1, 6);
//   }
// }, 3000);

setInterval(() => {
  wrapperElem.dataset.configuration = uniqueRand(1, 6, prev);
}, 3000);
