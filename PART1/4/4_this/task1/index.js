function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // Каким будет результат?

  // // Error: Cannot read property 'name' of undefined
  // Значение this внутри makeUser() равно undefined
  // ref: this принимает текущее this функции, а оно undefined