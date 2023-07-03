const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    // get random number between 0 - 3
    const randomNumber = Math.floor(Math.random() * colors.length);
    console.log(randomNumber);
    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber]; 
});

