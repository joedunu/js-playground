const main = () => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    console.log(today);
    console.log(today.toLocaleDateString("en-US"));
    console.log(today.toLocaleDateString("en-US", options));
}

main();