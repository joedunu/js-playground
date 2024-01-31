function  main ()  {
    const order = [2,3,1,5,4];
    const promises = [];
    
    for(i=1; i <= 5; i++) {
        promises.push(new Promise((resolve, reject) => {
            resolve(10 * i);
        }))
    }
    order.forEach(async element => {
        console.log(await promises[element - 1]);
    });
}

main();