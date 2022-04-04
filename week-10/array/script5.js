let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];
let [name, surname, deparment, position = "джуниор"] = arr;

console.log(name);
console.log(surname);
console.log(deparment);
console.log(position);