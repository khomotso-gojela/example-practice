const MAX_NUMBER = 15
const MIN_NUMBER = -5

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

const subtractHandler = () => {
    const newValue = parseInt(number.value) - 1
    number.value = newValue

    if (number.value <= MAX_NUMBER) {
        add.disabled = false
    }

    if (number.value <= MIN_NUMBER) {
        subtract.disabled = true
    }
}

const addHandler = () => {
    const newValue = parseInt(number.value) + 1
    number.value = newValue
    if (number.value >= MIN_NUMBER) {
        subtract.disabled = false
    }

    if (number.value >= MAX_NUMBER) {
        add.disabled = true
    }
}

subtract.addEventListener('click',subtractHandler)
add.addEventListener('click',addHandler)