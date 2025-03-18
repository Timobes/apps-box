let home = document.getElementById('main')
let name = document.getElementById('name-color')

function ReColor() {
    let randnum = Math.ceil(Math.random() * (999999 - 111111) + 111111)
    console.log(randnum)
    home.style.backgroundColor = `#${randnum}`

    name.innerHTML = `#${randnum}`
}

document.addEventListener('keydown',  function (event) {
    console.log(event)
    if(event.code == 'Space') {
        ReColor()
    }
})