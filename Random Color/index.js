

const containerEl = document.querySelector('.container')

for (let i = 0; i < 30; i++) {
    const colorContainerEl = document.createElement('div')
    colorContainerEl.classList.add('container-content')
    containerEl.appendChild(colorContainerEl)
    
}
const colorContainerEls = document.querySelectorAll('.container-content')

generateColors()

function generateColors(){
    colorContainerEls.forEach((colorContainerEl)=>{
        const newColor = randomColor()
        colorContainerEl.style.backgroundColor = "#" + newColor
        colorContainerEl.innerText = '#' + newColor
    })
}

 function randomColor(){
    const chars = '0123456789abcdef'

    const colorLength = 6;

    let color = ''

    for (let index = 0; index < colorLength; index++) {
        const randomNum = Math.floor(Math.random()* chars.length)
        color += chars.substring(randomNum, randomNum + 1)
    }
    return color
 }