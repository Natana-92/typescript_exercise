function add(
  n1: number,
  n2: number,
  showResult: boolean,
  resultParase: string
) {
  const result = n1 + n2;
  if (showResult) {
    console.log(resultParase + result);
  }
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultParase = "Result is :";

add(number1, number2, true, resultParase);
