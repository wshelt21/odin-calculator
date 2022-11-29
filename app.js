const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys  ')
const display = calculator.querySelector('.calculator__display')

keys.addEventListener('click', (e) => {
    if (!e.target.closest('button')) return

    const key =  e.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent
    const type = key.dataset.type;
    const { previousKeyType } = calculator.dataset


//Numbers
    if(type === 'number'){

    if(displayValue === '0'){
        display.textContent = keyValue;
    }else if (previousKeyType === 'operator') {
        display.textContent = keyValue
    }else{
        display.textContent = displayValue + keyValue
    }
    }

    //Operators
    if(type === 'operator'){
        const operatorKeys = keys.querySelectorAll('[data-type = "operator"]')
        operatorKeys.forEach(el => {el.dataset.state = '' })
        key.dataset.state = 'selected'

        calculator.dataset.n1 = displayValue
        calculator.dataset.operator = key.dataset.key
}

    if(type === 'equal'){
        const n1 =  parseInt(calculator.dataset.n1)
        const n2 = parseInt(displayValue)
        const operator = calculator.dataset.operator
        
        let result = '';
        if(operator === 'plus') result = n1 + n2
        if(operator === 'minus') result = n1 - n2
        if(operator === 'times') result = n1 * n2
        if(operator === 'divide') result = n1 / n2

        display.textContent = result
    }

calculator.dataset.previousKeyType = type

})

