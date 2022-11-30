const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys  ')
const display = calculator.querySelector('.calculator__display')

keys.addEventListener('click', (e) => {
    if (!e.target.closest('button')) return

    const key = e.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent
    const type = key.dataset.type;
    const { previousKeyType } = calculator.dataset
    const operatorKeys = keys.querySelectorAll('[data-type = "operator"]')
    let n1 = calculator.dataset.n1
    let n2 = displayValue
    let operator = calculator.dataset.operator


//Numbers
    if(type === 'number'){

    if(displayValue === '0'){
        display.textContent = keyValue;
    }else if (previousKeyType === 'operator') {
        display.textContent = keyValue
    }else if(previousKeyType === 'equal'){
        display.textContent = keyValue;
    }else{
        if(displayValue.length <= 19)
        display.textContent = displayValue + keyValue
    }
    }

    //Operators
    if(type === 'operator'){
        operatorKeys.forEach(el => {el.dataset.state = '' })
        key.dataset.state = 'selected'

        calculator.dataset.n1 = displayValue
        calculator.dataset.operator = key.dataset.key
        document.querySelector('.decimal').disabled = false
        //chaining operations 
        if(previousKeyType === 'number' && n1){
            display.textContent = operate(n1,n2,operator)
            let previousResult = display.textContent
            calculator.dataset.n1 = previousResult
        }
}

    if(type === 'equal'){
        if(previousKeyType === 'number'){

        if(n1 && n2){
        display.textContent = operate(n1,n2,operator)

        operatorKeys.forEach(el => {el.dataset.state = '' })
        key.dataset.state = ''
        document.querySelector('.decimal').disabled = false

        }
        }
    }

    if(type === 'clear'){
        display.textContent = '0'
        calculator.dataset.n1 = ''

        operatorKeys.forEach(el => {el.dataset.state = '' })
        key.dataset.state = ''
        document.querySelector('.decimal').disabled = false

    }

    if(type === 'decimal'){
        display.textContent = displayValue + keyValue
        document.querySelector('.decimal').disabled = true
        if(previousKeyType === 'operator'){
            display.textContent = '0' + keyValue
        }
    }

    if(type === 'backspace'){
        if(displayValue.length > 1){
            display.textContent = displayValue.substring(0,displayValue.length-1)
        } else if (displayValue !== '0'){
            display.textContent = '0'
        }
    }

calculator.dataset.previousKeyType = type

})

function operate (n1,n2,operator){
    let result = '';
      if(operator === 'divide' && n2 === '0'){
            return 'haha Dream on!'
        }
        if(operator === 'plus') result = Number(n1) + Number(n2)
        if(operator === 'minus') result = Number(n1) - Number(n2)
        if(operator === 'times') result = Number(n1) * Number(n2)
        if(operator === 'divide') result = Number(n1) / Number(n2)

        return result
}
