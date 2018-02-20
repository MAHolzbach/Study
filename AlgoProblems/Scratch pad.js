const steps = n => {
  const stepMaker = num => {
    return Array(num).length === 1 ? "#" : Array(num + 1).join("#");
  };
  const spaceMaker = num => {
    return Array(num + 1).join(" ");
  };
  for (i = 1; i <= n; i++) {
    let stepper = stepMaker(i);
    let spacer = spaceMaker(n - i);

    console.log(`${stepper}${spacer}`);
  }
};

steps(5);
