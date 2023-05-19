const names: Array<Number> = [9];

const promise :Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('10');
  }, 2000);
});
promise.then((data) => {
    data.split(" ");
});
