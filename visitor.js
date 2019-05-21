/*
Паттерн Посетитель позволяет добавлять объектам дополнительные операции, 
не изменяя их исходный код.
*/

class Monkey {
    shout() {
        console.log('Ooh oo aa aa!');
    }

    accept(operation) {
        operation.visitMonkey(this);
    }
}

class Lion {
    roar() {
        console.log('Roaaar!');
    }
    
    accept(operation) {
        operation.visitLion(this);
    }
}

class Dolphin {
    speak() {
        console.log('Tuut tuttu tuutt!');
    }
    
    accept(operation) {
        operation.visitDolphin(this);
    }
}

const speak = { // Посетитель,  обращается к каждому классу и вызывает нужный метод
    visitMonkey(monkey){
        monkey.shout();
    },
    visitLion(lion){
        lion.roar();
    },
    visitDolphin(dolphin){
        dolphin.speak();
    }
};

const jump = { // Посетитель
    visitMonkey(monkey) {
        console.log('Jumped 20 feet high! on to the tree!');
    },
    visitLion(lion) {
        console.log('Jumped 7 feet! Back on the ground!');
    },
    visitDolphin(dolphin) {
        console.log('Walked on water a little and disappeared');
    }
}

/*
Посетитель позволяет не изменять существующие объекты. 
С его помощью можно, например, добавить всем этим животным возможность 
прыгать без создания дополнительных методов.
*/

const monkey = new Monkey();
const lion = new Lion();
const dolphin = new Dolphin();

monkey.accept(speak);   // Ooh oo aa aa!!
monkey.accept(jump);   // Jumped 20 feet high! on to the tree!

lion.accept(speak);    // Roaaar!
lion.accept(jump);

dolphin.accept(speak);   // Tuut tutt tuutt!
dolphin.accept(jump);



