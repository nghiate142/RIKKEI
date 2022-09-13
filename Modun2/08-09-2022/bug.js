function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
    } else {
      let result = [];
      let countSuccess = 0;

      for (i = 0; i <= promises.length - 1; i++) {
        promises[i].then((res) => {
          countSuccess++;
          result[i] = res;
          if (countSuccess === promises.length) {
            console.log(result);
            resolve(result);
          }
        });
      }
    }
    // Your code here.
  });
}
// Test code.
Promise_all([]).then((array) => {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then((array) => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then((array) => {
    console.log("We should not get here");
  })
  .catch((error) => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });
