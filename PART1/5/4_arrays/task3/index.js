let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?

// здесь третьим элементом в массив добавляем функцию
// затем ее вызываем
// this в данном случае будет массив
// a, b, function(){alert(this)}