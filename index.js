// const button = document.querySelector("button")
// const body = document.querySelector("body")
// const color = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

// body.style.backgroundColor = 'violet'

// button.addEventListener('click', changeB)

// function changeB() {
//     const colorIndex = parseInt(Math.random()*color.length)
//     body.style.backgroundColor = color[colorIndex]
// }

const btn = document.querySelector("button")
const jism = document.querySelector("body")
const color = ["purple", "green", "yellow", "red", "blue", "orange", "pink", "lime",]

jism.style.backgroundColor = 'yellow'

btn.addEventListener('click', simpleFunc)

function simpleFunc() {
    const colorindex = parseInt(Math.random()*color.length)
    jism.style.backgroundColor = color[colorindex]
}