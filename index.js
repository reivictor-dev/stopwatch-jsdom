const areaTest = document.querySelector('.area_test')

let minutes = '0' + 0
let seconds = '0' + 0
let milisec = '0' + 0
let run;
const cronometro = () => {
    milisec++

    if (milisec === 99) {
        seconds++
        return milisec = 0
    }

    if (seconds === 60) {
        minutes++
        return seconds = 0

    }

    areaTest.innerHTML = `${minutes} : ${seconds} : ${milisec}`
}

const starta = () => {
    stoped()
    run = setInterval(() => {
        cronometro()
    }, (10));

}

const stoped = () => {
    clearInterval(run)
}

const reset = () => {
    /*its a lazy code hehehehe */
   return window.location.reload()
}

const increment = () => {
    const screenNumber = document.querySelector('.screen')
    return screenNumber.value++
}

const butao = document.querySelector('.btn')

butao.addEventListener('click', (e) => {

    starta()


})

const stopBtn = document.querySelector('.btn_stop')

stopBtn.addEventListener('click', (e) => {
    const screenNumber = document.querySelector('.screen')
    
    stoped()

    return screenNumber.value++
})

const resetBtn = document.querySelector('.btn_rst')

resetBtn.addEventListener('click', (e) => {
    
    reset()
})

const incBtn = document.querySelector('.btn_plus')

incBtn.addEventListener('click', (e) => {
    
    increment()
})
