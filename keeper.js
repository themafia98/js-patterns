/*
Шаблон Хранитель захватывает текущее состояние объекта 
и дает возможность восстанавливать его.
*/

class EditorMemento { // Объект Хранителя
    constructor(content) {
        this._content = content;
    }
    
    getContent() {
        return this._content;
    }
}

class Editor {
    constructor(){
        this._content = '';
    }
    
    type(words) {
        this._content = this._content + ' ' + words;
    }
    
    getContent() {
        return this._content;
    }
    
    save() {
        return new EditorMemento(this._content);
    }
    
    restore(memento) {
        this._content = memento.getContent();
    }
}

const editor = new Editor();

// что-нибудь пишем
editor.type('This is the first sentence.');
editor.type('This is second.');

// сохраняем состояние
const saved = editor.save();

// пишем что-нибудь еще
editor.type('And this is third.');

// контент до сохранения
console.log(editor.getContent());// This is the first sentence. This is second. And this is third.

// восстановление последнего состояния
editor.restore(saved);

console.log(editor.getContent());// This is the first sentence. This is second.