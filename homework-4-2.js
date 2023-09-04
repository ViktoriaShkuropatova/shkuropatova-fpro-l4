// Написати цикли, які зможуть:

// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let loop1 = ` `;
for (let i = 10; i<=20; i++){
    loop1 += i; 
    if (i< 20){
        loop1 += `,`; 
    }
}
console.log(`${loop1}`);
// Вивести квадрати чисел від 10 до 20.
for (let i = 10; i <= 20; i++) {
    let square = i * i;
    console.log(`${i} у квадраті дорівнює ${square}`);
}
// Вивести таблицю множення на 7.
for (let i = 1; i <= 10; i++) {
    console.log(`${i} * 7 = ${ i * 7}`);
}
// Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i; 
}
console.log(`Сума чисел від 1 до 15 дорівнює ${sum}`);
// // Знайти добуток усіх цілих чисел від 15 до 35.
let multiplication = 1;
for (let i = 15; i <= 35; i++) {
    multiplication *= i; 
}
console.log(`Добуток усіх цілих чисел дорівнює ${multiplication}`);
// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let arithmeticMean = 0;
for (let i=1; i<=500; i++) {
    arithmeticMean += i; 
    if (i== 500){
        console.log(`Середнє арифметичне всіх цілих чисел від 1 до 500 дорівнює ${arithmeticMean/i}`);
    }
}
// Вивести суму лише парних чисел в діапазоні від 30 до 80.
let evenNumbers = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        evenNumbers += i;
    }
}
console.log(`Сума парних чисел від 30 до 80 дорівнює ${evenNumbers}`);
// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let naturalNumber = 32;
let myArr = ` `;
let divisors = 0;
let sumDivisors = 0;
for (let i=1; i<=naturalNumber; i++){
    if (naturalNumber % i === 0){
        myArr += i;
        if (i < naturalNumber){
            myArr += `,`;
        }

        if (i % 2 === 0) {
            divisors++;
            sumDivisors += i;
        }
    }
}
console.log(`Всі дільники числа ${naturalNumber}: ${myArr}`);
// Визначити кількість його парних дільників.
console.log(`Кількість парних дільників числа ${naturalNumber}: ${divisors}`);
// Знайти суму його парних дільників.
console.log(`Сума парних дільників числа ${naturalNumber}: ${sumDivisors}`);
// Надрукувати повну таблицю множення від 1 до 10.
for (let i=1; i<=10; i++){
    for (let j=1; j<=10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
