const pr = new Promise(function exec(res, rej) {
  console.log("executor callback triggered by promise constructor");
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber % 2 === 0) {
      res();
    } else {
      rej();
    }
  }, 5000);
});

console.log("created the promise object");
console.log(pr);
