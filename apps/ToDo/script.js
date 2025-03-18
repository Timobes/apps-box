let inp = document.getElementById('inp')
let main1 = document.getElementById('main1')
let main2 = document.getElementById('main2')
let text;

inp.value = ''

function clearTask (e) {
    e.parentNode.style.display = 'none'
}

function createTask(e) {
    let arr = document.getElementById(e.parentElement.id)
    arr.children[1].style.display = 'none'
    main2.innerHTML += arr.outerHTML
    arr.style.display = 'none'
}

function newInp(e) {
    text = e.value
}

function send () {
    let id = Math.random()
    main1.innerHTML +=
    `
        <div id=${id}>
            <p class="text">${text}</p>
            <button onclick="createTask(this)" class="btn-create">Выполнил таску</button>
            <button onclick="clearTask(this)" class="btn-del">Удалить таску</button>
            <div>-----------------------------------------------------</div>
        </div>
    `
}


