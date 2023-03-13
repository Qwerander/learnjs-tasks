button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);


// оба обработчика сработают. Колбэк анонимный и removeEventListnert не сработает.