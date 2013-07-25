console.time('solved in');

function resolve(max) {
	for (var i = 1, sum = 0; i < max; i++) {
		if (0 === i % 3 || 0 === i % 5) {
			sum += i;
		}
	}
	return sum;
}

console.log('answer:', resolve(1000));
console.timeEnd('solved in');