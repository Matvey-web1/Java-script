/**
 * @param {string} userInput - Число
 * @returns {string} Строка с перечислением кратных трём
 * @description Формирование строки с перечислением чисел
 * от 1 до userInput, кратных трём, через запятую с пробелом
 */
export function getMultiplesOfThree(userInput) {
  let result = "";

for (let currentNumber = 1; currentNumber <= userInput; currentNumber++){
  if (result === "" && currentNumber % 3 === 0){
    result = result + currentNumber.toString()
  } else if (currentNumber % 3 === 0){
    result += `; ${currentNumber.toString()}`
  }
}

  return result;
}
