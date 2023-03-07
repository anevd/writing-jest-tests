// const arr = [1, 2, 3] => 6

const getSum = (arr) => {
	return arr.reduce((acc, el) => acc + el);
};

module.exports = getSum;
