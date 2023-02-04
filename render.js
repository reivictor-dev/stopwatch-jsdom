let body = document.body

const firstDiv = body.appendChild(document.createElement('div'))

firstDiv.style.margin = '-8px'
firstDiv.style.width = '100vw'
firstDiv.style.height = '100vh'
firstDiv.style.backgroundColor = '#40c0cb'
firstDiv.style.display = 'flex'
firstDiv.style.alignItems = 'center'
firstDiv.style.justifyContent = 'center'
/*END DIV*/

const firstDivChild = firstDiv.appendChild(document.createElement('div'))

firstDivChild.style.width = '75%'
firstDivChild.style.height = '85%'
firstDivChild.style.backgroundColor = '#f9f2e7'
firstDivChild.style.margin = '0 auto'
firstDivChild.style.display = 'flex'
firstDivChild.style.alignItems = 'center'
firstDivChild.style.justifyContent = 'center'
firstDivChild.style.borderRadius = '2rem'
/*END DIV*/

const childDiv = firstDivChild.appendChild(document.createElement('div'))
const h1 = document.createElement('h1')
childDiv.style.width = '50%'
childDiv.style.textAlign = 'center'
childDiv.style.position = 'relative'
childDiv.style.bottom = '30px'
childDiv.style.border = '2px solid rgba(64, 192, 203, .4)'
childDiv.style.borderRadius = '1rem'
childDiv.style.marginTop = '4rem'
childDiv.appendChild(h1).innerText = `IT'S JUST FOR TRAINING 😁`
/*END DIV*/

const divSecond = childDiv.appendChild(document.createElement('div'))
divSecond.style.width = '100%'
divSecond.style.height = '350px'
divSecond.style.margin = '0 auto'
/*END DIV*/

const serieCount = divSecond.appendChild(document.createElement('div'))
serieCount.style.width = '50%'
serieCount.style.height = '100px'
serieCount.style.marginBottom = '1rem'
serieCount.style.border = '1px solid rgba(0, 0, 0, .2)'
serieCount.style.position = 'absolute'
serieCount.style.bottom = '0'
serieCount.style.left = '25%'
/*END DIV*/

serieCount.appendChild(document.createElement('p')).innerHTML = 'REPS COUNT'
const numbersOf = serieCount.appendChild(document.createElement('div'))
const btnPlus = numbersOf.appendChild(document.createElement('button'))
btnPlus.classList.add('btn_plus')
btnPlus.innerText = '+'
btnPlus.style.fontSize = '1.5rem'
btnPlus.style.padding = '.1rem .5rem'
btnPlus.style.position = 'absolute'
btnPlus.style.right = '1rem'
btnPlus.style.bottom = '.7rem'
/*END DIV*/

const screen = numbersOf.appendChild(document.createElement('input'))
screen.classList.add('screen')
screen.type = 'text'
screen.disabled = 'disabled'
screen.value = '0'
screen.style.textAlign = 'center'
screen.style.fontSize = '2rem'
screen.style.marginTop = '-.5rem'
screen.style.width = '5rem'
screen.style.padding = '.6rem'
screen.style.border = 'none'
/*END DIV*/

const divSecondRender = divSecond.appendChild(document.createElement('div'))
divSecondRender.classList.add('area_test')
divSecondRender.style.width = '50%'
divSecondRender.style.height = '100px'
divSecondRender.style.margin = '0 auto'
/*END DIV*/

const btn = divSecond.appendChild(document.createElement('button'))
btn.innerHTML = 'START'
btn.type = 'button'
btn.classList.add('btn')
btn.style.margin = '2rem'
btn.style.padding = '.8rem 1.5rem'
/*END DIV*/

const btnStop = divSecond.appendChild(document.createElement('button'))

btnStop.innerHTML = "STOP"
btnStop.classList.add('btn_stop')
btnStop.style.margin = '2rem'
btnStop.style.padding = '.8rem 1.5rem'
/*END DIV*/

const btnRst = divSecond.appendChild(document.createElement('button'))

btnRst.innerHTML = "RESET"
btnRst.classList.add('btn_rst')
btnRst.style.margin = '2rem'
btnRst.style.padding = '.8rem 1.5rem'
/*END DIV*/