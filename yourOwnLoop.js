const loop = (init, test, next, body) => {
    for (let i = init; test(i) ; i = next(i)) {
      body(i);
    }
  };

console.log(loop(3, n => n > 0, n => n - 1, console.log))