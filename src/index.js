module.exports = function multiply(first, second) {
    first = first.split('').reverse();
    second = second.split('').reverse();

    let resultInArray = [];
    first.map((itemOfFirst, indexOfFirst) => {
      second.map((itemOfSecond, indexOfSecond) => {
        const product = itemOfFirst * itemOfSecond + (resultInArray[indexOfFirst + indexOfSecond] || 0);
        let decades = 0;
        product < 9
          ? resultInArray[indexOfFirst + indexOfSecond] = product
          : (
            decades = Math.floor(product/10),
            resultInArray[indexOfFirst + indexOfSecond] = product - decades*10,
            resultInArray[indexOfFirst + indexOfSecond + 1] = (resultInArray[indexOfFirst + indexOfSecond + 1] || 0) + decades
          );
      });
    });
    return resultInArray.reverse().join('');
};
