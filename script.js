function calculate(type, getValue) {

    if (type === 'action') {

        if (getValue === 'clear') {
            document.getElementById('fieldNumbers').value = ''
        }

        if (getValue === 'delete') {
            let fieldNumbers = document.getElementById('fieldNumbers').value
            document.getElementById('fieldNumbers').value = fieldNumbers.substring(0, fieldNumbers.length - 1)
        }

        if (getValue === '+' || getValue === '-' || getValue === '*' || getValue === '/' || getValue === '.') {
            document.getElementById('fieldNumbers').value += getValue
        }

        if (getValue === '=') {
            let fieldNumbers = eval(document.getElementById('fieldNumbers').value)

            if (!Number.isInteger(fieldNumbers)) {
                fieldNumbers = fieldNumbers.toFixed(2)
            }

            document.getElementById('fieldNumbers').value = fieldNumbers
        }

    } else if (type === 'numberValue') {
        document.getElementById('fieldNumbers').value += getValue
    }

}