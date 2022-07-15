function getMaxProfit(stockPrices) {
  var arrLength = stockPrices.length;
  var min = stockPrices[0];
  var minIndex = 0;
  var max = stockPrices[arrLength - 1];
  var maxIndex = arrLength - 1;
  for (var i = 1; i < arrLength; i++) {
    if (stockPrices[i] < min) {
      if (i < maxIndex) {
        min = stockPrices[i];
        minIndex = i;
      }
    }
    if (stockPrices[i] > max) {
      if (minIndex < i) {
        max = stockPrices[i];
        maxIndex = i;
      }
    }
  }
  console.log(`Buy on day index: ${minIndex} in price ${min}, sell on day index: ${maxIndex} in price: ${max}`);
  return max - min;
}

var stockPrices = [
  10, 7, 5, 8, 11, 9, 10, 12, 15, 13, 12, 15, 14, 16, 17, 15, 17, 18, 17, 19,
  20, 21, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4,
  3, 2, 1,
];
// var stockPrices = [
//   10, 7, 23, 8, 11, 9, 10, 12, 15, 13, 12, 15, 14, 16, 17, 15, 17, 18, 17, 19,
//   20, 21, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4,
//   3, 2, 1,
// ];
console.log("Max profit:" + getMaxProfit(stockPrices));
