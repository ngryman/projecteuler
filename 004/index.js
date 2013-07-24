console.time('solved in');

function isPalindromic(n) {
	var origin = n, rev = 0;

	do {
		rev = rev * 10 + n % 10;
		n = Math.floor(n / 10);
	} while (n > 0);

	return (origin == rev);
}

console.log('answer:', isPalindromic(101));
console.timeEnd('solved in');