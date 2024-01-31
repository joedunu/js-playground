const add = (a, b) => a + b;

const throttledFn = (func) => {
    let callCount = 0;
    let isFuncLocked = false;
    return async (...params) => {
        console.log(`Function called ${callCount++},\tparams: ${params},\tisFuncLocked: ${isFuncLocked}`);

        return await new Promise((resolve, reject) => {
            if(isFuncLocked) return reject('Too freequent requests');
            isFuncLocked = true;
            console.log(`Interval set`);
            const lockedInterval = setInterval(() => {
                isFuncLocked = false;
                clearInterval(lockedInterval);
                console.log(`Interval Cleared`);
            }, 100);

            const result = func(...params);
            console.log(`Result: ${result}`);
    
            return resolve(result);
        })
        .catch(e => console.error(`Error: ${e}`));   
    };
}

const main = async () => {
    const result = [];

    const throttledAdder = throttledFn(add);

    for( i = 0; i < 100; i++) {
       await new Promise((resolve) => {
            setTimeout(async () => resolve(result.push(await throttledAdder(i, i + 1)), 2));
        });
    }

    console.log(`Output: ${result.filter((result) => typeof result === "number")}`);
}

main();
