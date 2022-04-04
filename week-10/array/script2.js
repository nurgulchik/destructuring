function func() {
	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]; 
}

let [name, surname, department, position, salary] = func()

console.log(name);
console.log(surname);
console.log(deparment);
console.log(position);
console.log(salary);