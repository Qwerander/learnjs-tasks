new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);

// catch не выполнится поскольку ошибка произойдет позже