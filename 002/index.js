console.time('solved in');

const MAX = 4e6;

var sum = 2,
	f1 = 1,
	f2 = 2,
	term = 3;

while (true) {
	f1 = f2;
	f2 = term;
	term = f1 + f2;

	if (term >= MAX) break;
	if (0 === term % 2) sum += term;
}

console.log('answer:', sum);
console.timeEnd('solved in');