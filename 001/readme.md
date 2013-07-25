# Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

## Code

```javascript
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
```

## Result

```bash
answer: 233168
solved in: 1ms
```