export function sumAllIntegersDivisible(limit) {
    let accumulatedSum = 0;

    for (let i = 3; i < limit; i++) {
        if ( isDivisibleByThreeOrFive(i) ) {
            accumulatedSum += i;
        }
    }

    return accumulatedSum;
}

function isDivisibleByThreeOrFive(number) {
    return (number % 3 === 0 ) || ( number % 5 === 0 );
}

// gets parameter from terminal for testing
const parameterFromTerminal = Number(process.argv[2]);
if (parameterFromTerminal) {
    console.log(sumAllIntegersDivisible(parameterFromTerminal));
}
