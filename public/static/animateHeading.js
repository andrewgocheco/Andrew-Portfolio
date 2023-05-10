const animateHeading = (element) => {
    let iteration = 0;
    let interval;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
    setTimeout(() => {
      clearInterval(interval);
  
      interval = setInterval(() => {
        element.innerText = element.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return element.dataset.value[index];
            }
  
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
  
        if (iteration >= element.dataset.value.length) {
          clearInterval(interval);
        }
  
        iteration += 1 / 3;
      }, 30);
    }, 1000);
  };
  
  export default animateHeading;
  