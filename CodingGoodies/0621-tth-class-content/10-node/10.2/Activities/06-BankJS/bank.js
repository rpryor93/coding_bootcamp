var command = process.argv[2], amount = process.argv[3];
console.log('**************');
console.log('Bob\'s Bank');
console.log('**************');
if ('total' == command) {
    console.log('Total')
} else if ('lottery' == command) {
    console.log('Play the lottery!')
} else if ('deposit' == command) {
    if (checkAmount(amount, 'deposit')) {
        //Good to go
    } else {
        //noinspection JSAnnotator
        return console.error('Deposit must be a positive number');
    }
    console.log('Deposit', amount)
} else if ('withdraw' == command) {
    if (checkAmount(amount)) {
        //Good to go
    } else {
        //noinspection JSAnnotator
        return console.error('Withdrawal must be a negative number');
    }
    console.log('Withdrawing', amount);
} else {
    console.log('No Command Specified.\nUse Deposit, Withdraw, Lottery, and Total')
}


function checkAmount (amount, type) {
    if ('deposit' == type) {
        var deposit = parseFloat(amount);
        return deposit > 0;
    } else {
        var withdrawal = parseFloat(amount);
        return withdrawal < 0;
    }
}