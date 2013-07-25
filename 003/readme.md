# Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

## Code

```javascript
console.time('solved in');

function isPrime(n) {
	if (0 === n % 2) return false;

	for (var i = 3, limit = Math.floor(Math.sqrt(n)); i < limit; i++) {
		if (0 === n % i) return false;
	}

	return true;
}

function resolve(n) {
	for (
		var d = Math.floor(Math.sqrt(n));
		d >= 2 && (0 !== n % d || !isPrime(d));
		d--
	);
	return d;
}

console.log('answer:', resolve(600851475143));
console.timeEnd('solved in');
```

## Result

```bash
answer: 6857
solved in: 10ms
```