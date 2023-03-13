// function f(x) {
//     alert(x);
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс


function delay(f, ms) {

    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };

}

let f1000 = delay(alert, 1000);
f1000("test"); // показывает "test" после 1000 мc



function delay(f, ms) {

    return function (...args) {
        let savedThis = this; // сохраняем this в промежуточную переменную
        setTimeout(function () {
            f.apply(savedThis, args); // используем её
        }, ms);
    };

}