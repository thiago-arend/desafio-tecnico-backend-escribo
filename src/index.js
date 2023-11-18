export function sumAllIntegersDivisible(limit) {
    let accumulatedSum = 0;

    for (let i = 3; i < limit; i++) {
        if ( (i % 3 === 0 ) || ( i % 5 === 0 )) {
            accumulatedSum += i;
        }
    }

    return accumulatedSum;
}

const parameterFromTerminal = Number(process.argv[2]);
if (parameterFromTerminal) {
    console.log(sumAllIntegersDivisible(parameterFromTerminal));
}
