const downBtn = document.querySelector('.down-button')
const upBtn = document.querySelector('.up-button')

const sidebar = document.querySelector('.sidebar')
const sidebars = sidebar.querySelectorAll('div')
const mainSlide = document.querySelector('.main-slide')

const container = document.querySelector('.container')

sidebar.style.top = `-${(sidebars.length - 1) * 100}vh`


downBtn.addEventListener('click', () => {
    listSlide('down')
})

upBtn.addEventListener('click', () => {
    listSlide('up')
})

let countIndex = 0

function listSlide(direction) {
    if (direction === 'up') {
        countIndex++
        if(countIndex === sidebars.length) {
            countIndex = 0
        }
    } else if (direction === 'down') {
        countIndex--
       if (countIndex < 0) {
        countIndex = sidebars.length - 1
       }
    }


    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${countIndex * height}px)`
    sidebar.style.transform = `translateY(${countIndex * height}px)`
    

}

