console.time('solved in');

var sum = 0;

for (var i = 1; i <= 1000; i++) {
	if (0 === i % 3 || 0 === i % 5) {
		sum += i;
	}
}

console.log('answer:', sum);
console.timeEnd('solved in');