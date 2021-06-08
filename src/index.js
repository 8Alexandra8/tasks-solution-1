import { task1, task2, task3 } from "./resources/functions";

// task1
document.getElementById('button-task1-1').addEventListener('click', () => {
    document.getElementById('answer-task1').innerText = task1(42);
})
document.getElementById('button-task1-2').addEventListener('click', () => {
    document.getElementById('answer-task1').innerText = task1('Hello!');
})
document.getElementById('button-task1-3').addEventListener('click', () => {
    document.getElementById('answer-task1').innerText = task1(true);
})
document.getElementById('button-task1-4').addEventListener('click', () => {
    document.getElementById('answer-task1').innerText = task1({});
})
document.getElementById('button-task1-5').addEventListener('click', () => {
    document.getElementById('answer-task1').innerText = task1(() => {});
})
document.getElementById('button-task1-6').addEventListener('click', () => {
    document.getElementById('answer-task1').innerText = task1(null, 'Ошибка языка');
})
document.getElementById('button-task1-7').addEventListener('click', () => {
    document.getElementById('answer-task1').innerText = task1(undefined);
})

// task2
document.getElementById('button-task2-1').addEventListener('click', () => {
    document.getElementById('answer-task2').innerText = task2([11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0], 'sort-ask-save');
})
document.getElementById('button-task2-2').addEventListener('click', () => {
    document.getElementById('answer-task2').innerText = task2([11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0], 'sort-desk-save');
})
document.getElementById('button-task2-3').addEventListener('click', () => {
    document.getElementById('answer-task2').innerText = task2([11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0], 'sort-ask-dont-save');
})
document.getElementById('button-task2-4').addEventListener('click', () => {
    document.getElementById('answer-task2').innerText = task2([11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0], 'sort-desk-dont-save');
})
document.getElementById('button-task2-5').addEventListener('click', () => {
    document.getElementById('answer-task2').innerText = task2([11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0], 'min');
})
document.getElementById('button-task2-6').addEventListener('click', () => {
    document.getElementById('answer-task2').innerText = task2([11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0], 'max');
})

// task3
document.getElementById('button-task3').addEventListener('click', () => {
    document.getElementById('answer-task3').innerText = task3([{name: "overflow", value: "hidden"}, {name: "cursor", value: "pointer"}]);
})
