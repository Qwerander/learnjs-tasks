alert( alert(1) || 2 || alert(3) );

// 1й внутренний алерт выведет 1 но для внешнего значение будет false
// вывод 2 внешним алерт
// до 3 аргумента код не дойдет
// ответ 1 затем 2