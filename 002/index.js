console.time('solved in');

function resolve(max) {
	for (
		var f1 = 1, f2 = 2, sum = 2, term = 3;
		term < max;
	    f1 = f2, f2 = term, term = f1 + f2
	) {
		if (0 === term % 2) sum += term;
	}
	return sum;
}

console.log('answer:', resolve(4e6));
console.timeEnd('solved in');