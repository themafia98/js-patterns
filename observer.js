/*
Паттерн Наблюдатель позволяет оповещать всех заинтересованных объектов 
о произошедших изменениях.
*/

const JobPost = title => ({
    title: title
});

class JobSeeker {
    constructor(name) {
        this._name = name;
    }

    notify(jobPost) {
        console.log(this._name, 'has been notified of a new posting :', jobPost.title);
    }
}

class JobBoard {
    constructor() {
        this._subscribers = [];
    }

    subscribe(jobSeeker) {
        this._subscribers.push(jobSeeker);
    }

    addJob(jobPosting) {
        this._subscribers.forEach(subscriber => {
            subscriber.notify(jobPosting);
        })
    }
}

// создаем подписчиков
const jonDoe = new JobSeeker('John Doe');
const janeDoe = new JobSeeker('Jane Doe');
const kaneDoe = new JobSeeker('Kane Doe');

// создаем доску объявлений
// подписываем соискателей
const jobBoard = new JobBoard();
jobBoard.subscribe(jonDoe);
jobBoard.subscribe(janeDoe);

// оповещаем подписчиков о новой вакансии
jobBoard.addJob(JobPost('Software Engineer'));

// John Doe has been notified of a new posting : Software Engineer
// Jane Doe has been notified of a new posting : Software Engineer