module.exports = function toReadable(number) {
    let oneAndZeros = ['hundred'];
    let numbers = [
        ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
            'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
            'eighteen', 'nineteen'],
        ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    ];
    let numberArray = String(number).split('');
    // from 0 to 19
    if (number >= 0 && number <= 19) {
        return numbers[0][number];
    }
    if (number >= 20 && number <= 99) {
        return from20To99(number);
    }
    if (number >= 100 && number <= 999) {
        return from100To999(number);
    }

    // from 20 to 99
    function from20To99(number) {
        let numberArray = String(number).split('');
        let dozenDigit = numberArray[0];
        let dozenText = numbers[1][dozenDigit - 2];

        let digit = numberArray[1];
        let digitText = numbers[0][digit];

        return digit > 0 ? dozenText + ' ' + digitText : dozenText;
    }

    // from 100 to 999
    function from100To999(anumber) {

        let hundredDigit = numberArray[0];
        let hundredText = numbers[0][hundredDigit] + ' hundred';
        let twoLastDigits = numberArray[1] + numberArray[2];
        if (hundredDigit >= 1 && hundredDigit <= 9 && twoLastDigits === '00') {
            console.log('hello');
            return hundredText;
            }
        
        if (twoLastDigits >= 1 && twoLastDigits <= 9) {
            return hundredText + ' ' + numbers[0][numberArray[2]];
        }
        if (twoLastDigits >= 10 && twoLastDigits <= 19) {
            return hundredText + ' ' + numbers[0][twoLastDigits];
        }
        if (twoLastDigits >= 20 && twoLastDigits <= 99) {
            return hundredText + ' ' + from20To99(Number(twoLastDigits));
        }

    
    }
}
