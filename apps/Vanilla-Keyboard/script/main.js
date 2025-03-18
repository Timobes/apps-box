let key = document.getElementById("keyboard");
const keyElem = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

for (let i = 0; i < keyElem.length; i++) {
    key.innerHTML += `<button onclick="clickHandler(this)" class="keyboard__elem" id="${i}">${keyElem[i]}</button>`;
}

let clickWord = '';

function start() {
    let rand = Math.floor(Math.random() * 26);
    let btn = document.getElementById(rand);

    btn.classList.add('color__green');

    function delCol() {
        btn.classList.remove('color__green');
    }

    setTimeout(delCol, 3000);

    console.log(btn.textContent);
    console.log('click = ', clickWord);

    if (btn.textContent == clickWord) {
        console.log('Top!!!');
    }
}

function clickHandler(e) {
    console.log(e.textContent);
    clickWord = e.textContent;
    console.log('handl = ', clickWord);
    start(); // Вызываем start после установки clickWord
}
