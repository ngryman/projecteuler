# Problem 4

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

## Code

```javascript
console.time('solved in');

function isPalindromic(n) {
	var origin = n, rev = 0;

	do {
		rev = rev * 10 + n % 10;
		n = Math.floor(n / 10);
	} while (n > 0);

	return (origin == rev);
}

function resolve() {
	var product, max = 0;

	for (var x = 999; x >= 900; x--) {
		for (var y = 999; y >= 900; y--) {
			product = x * y;
			if (isPalindromic(product) && product > max) {
				max = product;
			}
		}
	}

	return max;
}

console.log('answer:', resolve());
console.timeEnd('solved in');
```

## Result

```bash
answer: 906609
solved in: 3ms
```