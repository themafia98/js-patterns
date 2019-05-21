/*
Шаблонный метод определяет «скелет» алгоритма,
но делегирует реализацию шагов дочерним классам.
*/

class Builder { // определяет скелет алгоритма сборки
    // Template method
    build() {
        this.test();
        this.lint();
        this.assemble();
        this.deploy();
    }
}

class AndroidBuilder extends Builder { // конкретную реализацию каждого шага
    test() {
        console.log('Running android tests');
    }
    
    lint() {
        console.log('Linting the android code');
    }
    
    assemble() {
        console.log('Assembling the android build');
    }
    
    deploy() {
        console.log('Deploying android build to server');
    }
}

class IosBuilder extends Builder {
    test() {
        console.log('Running ios tests');
    }
    
    lint() {
        console.log('Linting the ios code');
    }
    
    assemble() {
        console.log('Assembling the ios build');
    }
    
    deploy() {
        console.log('Deploying ios build to server');
    }
}