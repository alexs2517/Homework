// const firstName = 'John'
// // в основнм везде используем КОНСТ где только влзможно, это поможет избежать многих ошибок
// let age = 20


// var lastName = 'Alex'
// // Вар стараемся не использовать вообще
// console.log(firstName)
// console.log(age)
// console.log(lastName)

// ====================================================================

// Константы (неизменяемые значения)
const firstName = "Леонид";
const BIRTH_YEAR = 1990;

// Переменные (могут изменяться)
let age = 28;                            // Возраст (число)
let jobTitle = "Frontend Developer";     // Профессия (строка)
let isStudent = false;                   // Флаг "студент" (булево значение)

console.log("Имя: " + firstName);
console.log("Год рождения: " + BIRTH_YEAR);
console.log("Возраст: " + age + " лет");
console.log("Профессия: " + jobTitle);
console.log("Учится в университете? " + (isStudent ? "Да" : "Нет"));


//=====================================================================

function greet(name) {
    return `Hello "${name}"`;
}

// Пример использования:
console.log(greet("Alice")); // Выведет: Hello "Alice"
console.log(greet("Bob"));   // Выведет: Hello "Bob"


// ====================================================================

// 1. Создаём массив чисел
const numbers = [5, 12, 8, 15, 3, 20];

// 2. Функция, которая выводит числа > 10
function printNumbersGreaterThanTen(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            console.log(arr[i]);
        }
    }
}

// 3. Вызов функции с нашим массивом
printNumbersGreaterThanTen(numbers);


// ====================================================================

function calculator(a, b, operation) {
    switch (operation) {
        case 'plus':
            return a + b;
        case 'minus':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            return 'Unknown operation';
    }
}

// Примеры использования
const result1 = calculator(2, 3, 'minus');
console.log(result1); // Выведет: -1

const result2 = calculator(5, 3, 'plus');
console.log(result2); // Выведет: 8

const result3 = calculator(4, 5, 'multiply');
console.log(result3); // Выведет: 20

const result4 = calculator(10, 2, 'divide');
console.log(result4); // Выведет: 5

const result5 = calculator(2, 3, 'power');
console.log(result5); // Выведет: Unknown operation 

// =================================================================

// 1. Создаем массив пользователей
const users = [
    { id: 1, name: "Анна", isAdmin: false },
    { id: 2, name: "Иван", isAdmin: true },
    { id: 3, name: "Мария", isAdmin: false },
    { id: 4, name: "Петр", isAdmin: false },
    { id: 5, name: "Елена", isAdmin: true }
];

// 2. Создаем счетчик обычных пользователей (начальное значение 0)
let regularUsersCount = 0;

// 3. Перебираем массив и считаем не-админов
for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        regularUsersCount++;
    }
}

// 4. Выводим результат
console.log(`Количество обычных пользователей: ${regularUsersCount}`);
