document.addEventListener("DOMContentLoaded", () => {
  let counter = document.querySelector(".counter");
  let startbtn = document.querySelector(".start");
  let stopbtn = document.querySelector(".stop");
  let clearbtn = document.querySelector(".clear");
  let mls = 0;
  let secend = 0;
  let min = 0;
  let houer = 0;
  let adad = Number(counter.innerHTML);

  startbtn.addEventListener("click", () => {
    counter.classList.toggle("translition");
    let timer = setTimeout(handeler, 1);
    function handeler() {
      mls++;
      if (mls == 100) {
        mls = 0;
        secend++;
        if (secend == 60) {
          secend = 0;
          min++;
        }
        if (min == 60) {
          min = 0;
          houer++;
        }
      }
      counter.innerHTML = `${houer}:${min}:${secend}:${mls}`;
      let timer = setTimeout(handeler, 1);
      stopbtn.addEventListener("click", () => {
        clearTimeout(timer);

      });
      clearbtn.addEventListener("click", () => {
        counter.classList.toggle("translition");
        clearTimeout(timer);
        let mls = 0;
        let secend = 0;
        let min = 0;
        let houer = 0;
        counter.innerHTML = `0${houer}:0${min}:0${secend}:0${mls}`;
      });
    }
  });
});
