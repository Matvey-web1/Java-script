// Задача №1

// В программе объявлены две переменные — price и range. Переменная range может принимать одно из трех строковых значений — month/day/week. Переменная price хранит в себе числовое значение. Необходимо написать программу, которая формирует строку с использованием данных переменных по следующему шаблону: 

// <значение price> Р в <эквивалент значения range на русском языке> 

// Пример значений переменных: 

// let price = 10000 

// let range = "day" 

// Пример результата:

// 10000 Р в день

const price = Number(prompt( "Введите сумму (в руб.)"))
const range = prompt("Введите период (month, week или day)")
//Добавить проверку валидности данных
//Дописать логику преобразования range
if(!Number.isFinite(price) || price <= 0){
    throw new Error("Доход введен некорректно")
}

if(range!== "month" && range!== "week" && range!== "day") {
    throw new Error("Период указан неверно")
}

let formattedRange;
if(range === "month"){
    formattedRange = "месяц"
    
}else if(range === "week"){
   formattedRange = "неделю" 
}else{
    formattedRange = "день"
}

const formattedPrice = price.toLocaleString('ru-RU', {style: "currency", currency: "RUB"})

const result = `${formattedPrice} в ${formattedRange}`
console.log(result)
