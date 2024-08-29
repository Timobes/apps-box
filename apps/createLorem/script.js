const range = document.getElementById('range')
const rangeValue = document.getElementById('rangeValue')
const res = document.getElementById('result')
const createBtn = document.getElementById('create')

let mas = [
    'Lorem ipsum odor amet, consectetuer adipiscing elit.',
    'Fringilla ultricies ut vel magnis suscipit iaculis aptent.',
    'Lacinia malesuada habitant laoreet magnis, torquent dignissim pulvinar.',
    'Conubia posuere phasellus primis orci elementum luctus?',
    'Faucibus tortor mi donec eget tincidunt sapien.',
    'Interdum aptent metus hac cursus quis cursus viverra fusce morbi.',
    'Quisque fusce magnis massa inceptos sagittis luctus nulla.',
    'Velit potenti consequat vivamus tristique magna pharetra donec massa sit.',
    'Penatibus mus cursus habitant elit sagittis commodo.',
    'Parturient odio nec dis massa; porttitor fusce maecenas massa.',
    'Cubilia fermentum facilisis sem dictum diam.',
    'Aliquam erat est nulla consectetur fringilla magnis efficitur dui a.',
    'Est neque leo enim justo orci ullamcorper faucibus egestas.',
    'Ex taciti erat erat feugiat dis et ullamcorper tempor.',
    'Euismod enim dictumst cubilia proin lacinia varius.',
    'Suspendisse vitae non per varius consectetur fringilla.', 
    'Faucibus habitasse odio pretium potenti torquent vitae.', 
    'Fringilla molestie gravida consectetur eleifend senectus.', 
    'Donec platea parturient facilisis dui egestas vulputate scelerisque.',
    'Facilisi nullam accumsan pellentesque nibh mauris sodales porttitor suscipit quis. '
]


function create() {
    let value = range.value
    console.log('value = ',value)

    let i = mas.slice(0, value)
    console.log(i)

    res.innerText = i 
}

document.addEventListener('input', function() {
    console.log(range.value)
    rangeValue.innerText = range.value
})

createBtn.addEventListener('click', function () {
    create()
})

document.addEventListener('DOMContentLoaded', function () {
    rangeValue.innerText = range.value
})