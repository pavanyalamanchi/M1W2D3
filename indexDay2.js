window.onload = function() {
    numberCreator()
}

const numberCreator = function() {
    let parentDiv = document.getElementById('number-container')
    parentDiv.innerHTML = ''
    for (let i = 1; i <= 76; i++) {
        let newNumber = document.createElement('div')
        newNumber.innerText = i
        newNumber.classList.add('number')
        parentDiv.appendChild(newNumber)
    }
}
const buttonClick = function() {
    randomNumber = Math.floor((Math.random() * 76) + 1)
    randomClick = document.getElementsByClassName('number')
    if (randomClick[randomNumber - 1].style.backgroundColor !== 'red') {
        randomClick[randomNumber - 1].style.backgroundColor = 'red'
        divChild = document.createElement('p')
        buttonContainer = document.getElementById('button-container')
        buttonContainer.appendChild(divChild)
        document.getElementsByTagName('p')[0].innerHTML = randomNumber
    } else {
        divChild = document.createElement('p')
        buttonContainer = document.getElementById('button-container')
        buttonContainer.appendChild(divChild)
        document.getElementsByTagName('p')[0].innerHTML = `number ${randomNumber} already randomized click again!`
    }
}
