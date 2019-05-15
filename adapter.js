/*
Этот паттерн оборачивает несовместимый с чем-то объект
и делает его совместимым, не изменяя исходный код.
*/

class AfricanLion  {
    roar() {}
}

class AsianLion  {
    roar() {}
}

// Игрок может охотиться только на объекты, соответствующие этому интерфейсу:
class Hunter{
hunt(lion) {
    // ...
    lion.roar();
    //...
}

}

/*

Нужно ввести в игру дикую собаку, но у нее другой интерфейс.
Чтобы совместить собаку и охотника, нужен Адаптер

*/

class WildDog {
    bark() {
    }
}

class WildDogAdapter {

    constructor(dog) {
        this.dog = dog;
    }
    
    roar() {
        this.dog.bark();
    }
}

wildDog = new WildDog();
wildDogAdapter = new WildDogAdapter(wildDog);

hunter = new Hunter();
hunter.hunt(wildDogAdapter);