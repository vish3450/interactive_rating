let ratings = document.querySelector(".ratings");
let container = document.querySelector(".container");
let thankyou = document.querySelector(".thankyou");
let button = document.querySelector("button");
let ratingvalue = document.querySelector("#ratingvalue");
let myrating;
let clickcount = 0;
function rateclick(event) {}
ratings.addEventListener("click", (e) => {
  clickcount++;
  console.log(clickcount);
  if (clickcount > 1) {
    console.log(myrating.style.backgroundColor);
    myrating.style.backgroundColor = "hsl(213, 19%, 22%)";
  }
  myrating = e.target;
  console.log(myrating);
  myrating.style.backgroundColor = "white";
  myrating.style.color = "hsl(25, 97%, 53%)";
  let ratingval = myrating.textContent;
  ratingvalue.textContent = `You selected ${ratingval} out of 5`;
  button.addEventListener("click", (e) => {
    container.classList.add("hidden");
    thankyou.classList.remove("hidden");
  });
});
