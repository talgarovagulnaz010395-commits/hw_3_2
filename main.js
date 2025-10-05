const counter = document.querySelector('.counter'); //первое задание
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");

let count = 0;

incrementBtn.addEventListener('click', (event) => {
    count++;
    counter.innerText = count;
    counter.style.color = 'green';
});
decrementBtn.addEventListener('click', (event) => {
        count--;
        counter.innerText = count;
        counter.style.color = 'red';
});


const block = document.querySelector('.block'); //второе задание
block.addEventListener("click", (event) => console.log(event));
block.onclick = e => console.log(e.offsetX, e.offsetY);


const input = document. querySelector('input'); //третье задание

input.oninput = () => {
    const color = input.value.trim();
    if (CSS.supports('color', color)) {
        document.body.style.backgroundColor = color;
    } else {
        document.body.style.backgroundColor = 'white';
    }
};











