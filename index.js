console.log('index.js')

const btnUpArrow = document.getElementById('up-arrow')
btnUpArrow.addEventListener('click', (event) => {

    event.preventDefault()

    document.documentElement.scrollTop = 0
})