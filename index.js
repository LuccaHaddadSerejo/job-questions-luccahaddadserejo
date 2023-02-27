// Questão 1:
const sum = () => {
  let index = 13;
  let sum = 0;
  let k = 0;

  while (k < index) {
    k = k + 1;
    sum = sum + k;
  }
  return sum;
};

console.log(sum());

// Questão 2:

const checkFibonnaci = (num) => {
  let x = 0;
  let y = 1;

  if (num < 0) {
    return false;
  }

  while (y < num) {
    let temp = y;
    y += x;
    x = temp;
  }

  return y === num;
};

console.log(checkFibonnaci(5));

// Questão 3:

const dailyCompanyBilling = [1316, 1670, 924, 1633, 0, 0, 4522, 5788, 9877, 0];

const lowestBilling = (arr) => {
  return arr.sort((a, b) => b - a)[0];
};

console.log(lowestBilling(dailyCompanyBilling));

const highestBilling = (arr) => {
  return arr.sort((a, b) => a - b)[0];
};

console.log(highestBilling(dailyCompanyBilling));

const arrayMedia = (arr) => {
  const filterValues = arr.filter((value) => value > 0);

  const sumOfValues = arr.reduce((acc, cv) => acc + cv, 0);

  const result = sumOfValues / filterValues.length;

  return result.toFixed(3);
};

console.log(arrayMedia(dailyCompanyBilling));

// Questão 4:

const companyTotalBilling = {
  SP: "67.836.43",
  RJ: "36.678,66",
  MG: "29.229,88",
  ES: "27.165,48",
  Outros: "19.849,53",
};

const sumOfTotalProfit = (arr) => {
  const formatArr = arr.map((value) => parseFloat(value));
  return formatArr.reduce((acc, cv) => acc + cv, 0).toFixed(3);
};

const findPercentage = (total, num) => {
  return (num / total) * 100;
};

const checkPercentualOfEachState = (arr) => {
  const dataKeys = Object.keys(arr);
  const totalValue = sumOfTotalProfit(Object.values(arr));

  dataKeys.forEach((value) => {
    let formatValue = parseFloat(arr[value]);
    arr[value] = findPercentage(totalValue, formatValue).toFixed(2) + "%";
  });
};

checkPercentualOfEachState(companyTotalBilling);
console.log(companyTotalBilling);

// Questão 5:

const invertString = (str) => {
  let newStr = "";

  for (let i = str.length; i > 0, i--; ) {
    newStr = newStr + str[i];
  }
  return newStr;
};

console.log(invertString("InvertendoStrings"));
