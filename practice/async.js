let asyncFunc1 = (msg) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(`func1 : ${msg}`);
        }, 1000);
    })

let asyncFunc2 = (msg) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(`func2 : ${msg}`);
        }, 1000);
    })