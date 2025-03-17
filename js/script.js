let counter = document.querySelectorAll('.counter');

let arr = Array.from(counter);


  arr.map((item) => {
    let counterNumber = item.innerHTML;

    function counterjs() {
      counterNumber--;
      item.innerHTML = counterNumber;
      if (counterNumber == 0) {
        clearInterval(stop);
      }
    }

    let stop = setInterval(() => {
      counterjs();
    }, 400);
  });

