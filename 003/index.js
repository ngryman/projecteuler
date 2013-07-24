console.time('solved in');

const N = 600851475143;

var d = Math.floor(Math.sqrt(N));

function isPrime(n) {
	if (0 === n % 2) return false;

	for (var i = 3, limit = Math.floor(Math.sqrt(n)); i < limit; i++) {
		if (0 === n % i) return false;
	}

	return true;
}

for ( ; d >= 2 && (0 !== N % d || !isPrime(d)); d--) ;

console.log('answer:', d);
console.timeEnd('solved in');