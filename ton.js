/*
Паттерн Синглтон ограничивает инстанцирование и позволяет
убедиться в том, что класс представлен в программе единственным экземпляром.

В JavaScript Синглтоны могут быть реализованы с помощью шаблона Модуль. 
Приватные переменные и функции при этом прячутся в замыкании.
 */

const president = (function(){

const presidentsPrivateInformation = 'Super private';
const name = 'Turd Sandwich';

const getName = () => name;

return {
    getName
}
}());

console.log(president.getName()); // 'Turd Sandwich'
president.name; // undefined
president.presidentsPrivateInformation; // undefined
