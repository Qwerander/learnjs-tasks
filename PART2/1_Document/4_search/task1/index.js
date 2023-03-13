const table = document.getElementById('age-table');

const label = document.querySelectorAll('#age-table label');

const td = table.querySelector('td');

const form = document.querySelector('form[name="search"]');

const input = form.querySelector('input');

const inputs = form.querySelectorAll('input'); 
const lastInput = inputs[inputs.length-1]; 

console.log(table);
console.log(label);
console.log(td);
console.log(form);
console.log(input);
console.log(lastInput);