
// default factory

/*

Паттерн Простая фабрика производит нужный экземпляр, не утруждая клиента тонкостями этого процесса.

*/

class WoodenDoor{

    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    getDescription() {
        console.log('I am a wooden door');
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }
}

const DoorFactory = {
    makeDoor: (width,height) => new WoodenDoor(width,height)
};

const door = DoorFactory.makeDoor(100,200);
console.log('Width: ' + door.getWidth());
console.log('Height: ' + door.getHeight());



// Factory method //

/*

Паттерн Фабричный метод позволяет делегировать логику создания нужных экземпляров дочерним классам.

*/

class Developer{

    askQuestions() {
        console.log('Asking about skills.');
    }
}

class CommunityExecutive {

    askQuestions(){
        console.log('Ask about comunity skills.');
    }
}

class HiringManager {
    takeInterview(){
            const interviewr = this.makeInterviewer();
            interviewr.askQuestions();

    }
}

class DevelopmentManager extends HiringManager{
    makeInterviewer(){
        return new Developer();
    }
}

class MarketingManager extends HiringManager {
    makeInterviewer(){
        return new CommunityExecutive();
    }
}

const devManager = new DevelopmentManager();
devManager.takeInterview(); // Asking about design patterns
const marketingManager = new MarketingManager();
marketingManager.takeInterview(); // Asking about community buildng.


// Abstract factory

/*
Абстрактная фабрика – это интерфейс, который группирует другие фабрики, логически связанные друг с другом.
*/

// ... from 1 lessin


class IronDoor {
    getDescription() {
        console.log('I am an iron door');
    }
}

class Welder {
    getDescription(){

        console.log('I can only iran doors');
    }
}

class Carpenter {
    getDescription(){
        console.log('I can only fit wooden doors');
    }
}

class WoodenDoorFactory{
    makeDoor(){
        return new WoodenDoor();
    }

    makeFittingExpert(){
        return new Carpenter();
    }
}

class IronDoorFactory {
    makeDoor(){
        return new IronDoor();
    }
 
    makeFittingExpert() {
        return new Welder();
    }
}


woodenFactory = new WoodenDoorFactory();
let doorOne = woodenFactory.makeDoor();
expert = woodenFactory.makeFittingExpert();
 
doorOne.getDescription(); // I am a wooden door
expert.getDescription(); // I can only fit wooden doors
 
ironFactory = new IronDoorFactory();
 
doorOne = ironFactory.makeDoor();
expert = ironFactory.makeFittingExpert();
 
doorOne.getDescription();  // I am an iron door
expert.getDescription(); // I can only fit iron doors