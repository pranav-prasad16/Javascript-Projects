let count = 0;

const decreseButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");
const increaseButton = document.querySelector(".increase");

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (btnFunction) => {
        const styles = btnFunction.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("reset")) {
            count = 0;
            value.style.color = "hsl(209, 61%, 16%)";
        }
        else{
            count++;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        else if (count < 0) {
            value.style.color = "red";
        }
        else {
            value.style.color = "hsl(209, 61%, 16%)";
        }
        value.textContent = count;
    });
});