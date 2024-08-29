const quote = document.getElementById('quote')
const btn = document.getElementById('create')

const mas_quote = [
    'Что разум человека может постигнуть и во что он может поверить, того он способен достичь',
    'Стремитесь не к успеху, а к ценностям, которые он дает',
    'Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.',
    'Сложнее всего начать действовать, все остальное зависит только от упорства.',
    'Надо любить жизнь больше, чем смысл жизни.',
    'Жизнь - это то, что с тобой происходит, пока ты строишь планы.',
]

function GetRandNum() {
    const randomNum = Math.floor(Math.random() * mas_quote.length)
    return randomNum
}

function setQuote() {
    let num = GetRandNum()
    console.log(num)

    quote.innerText = mas_quote[num]
}



btn.addEventListener('click', function() {
    setQuote()
})

document.addEventListener('keydown', function(event) {
    if (event.key == ' ') {
        setQuote()
    }    
})

document.addEventListener('DOMContentLoaded', function() {
    setQuote()
})