const calculateChange = function (total, cash) {
  let change = cash - total;
  let tenDollar = change / 1000;
  let twoDollar = change / 200;
  let left = change % 1000;
  return left;
  // Your code here
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// Expected Output
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
