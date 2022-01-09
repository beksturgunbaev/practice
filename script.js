// Тернарный оператор: =====================================================

// 9 < 7 ? console.log('Верно!') : console.log('Неверно!');


// Методы массива: =====================================================
// const myArray = ['Mark Zuckerberg', 'James', 'Ilon Mask'];
// console.log(myArray);

// .push()
// myArray.push('Beks');
// .pop()
// myArray.pop();

// .unshift()
// myArray.unshift('new');
// .shift()
// myArray.shift();
// console.log(myArray);


// Цикл forEach: =====================================================

// const users = ['Asan', 'Zhanna', 'Chopa']

// users.forEach((user, i) => {
//     console.log(`The index of the ${user} is: ${i}`)
// });

// for(let user of users) {
//     console.log(user)
// }


// Объекты =====================================================
// const person = {
//     name: 'Mark',
//     age: 23,
//     isMarried: false
// }
// console.log(person.name);
// console.log(person['age']);


// // Методы объекта =====================================================
// let person = {
//     name: 'Mark',
//     age: 23,
//     isMarried: false,
//     sayHi: function(name) {
//         console.log(`Привет ${name}! Меня зовут ${this.name}`);
//     }
// }

// person.sayHi('Игорь');
// console.log(person['name'])

// Цикл for in в объекте ===============================================

// for(let item in person) {
//     console.log(item , ':' , person[item]);
// }


// Классы. Конструкторы объектов ======================================

// class Person {
//     constructor(name, age, city) {
//         this.name = name;
//         this.age = age;
//         this.city = city
//     }
// }

// let person1 = new Person('Beks', 22, 'Bishkek');
// let person2 = new Person('Zhanna', 20, 'Bishkek');

// console.log(person1);
// console.log(person2)



// ================================== ToDo lis ==============================================)

let todoList = document.querySelector('ul'),
    todoForm = document.querySelector('form'),
    todoInput = document.querySelector('input');

todoForm.addEventListener('submit', addTodo);

function addTodo(e) {
    e.preventDefault();

    // Create task:
    let taskText = todoInput.value;
    let newLi = document.createElement('li');
    newLi.innerText = '- ' + taskText;
    todoList.append(newLi);

    // Create Delete button:
    let delBtn = document.createElement('button');
    delBtn.innerText = "x";

    newLi.append(delBtn);
    delBtn.classList.add('btn-danger');

    delBtn.addEventListener('click', function() {
        this.closest('li').remove();
    })

    todoInput.value = "";
}


// ================================= Timer =====================================

let start = document.getElementById('start'),
    pause = document.getElementById('pause'),
    reset = document.getElementById('reset'),
    counterEl = document.getElementById('counter');

let counter = 0;
let timerId;

// start counter:

start.onclick = function() {
    timerId = setInterval(function(){
        counter++;
        counterEl.innerText = counter;
    }, 1000);
}

// pause counter:
pause.onclick = function() {
    clearInterval(timerId);
}

// Reset counter:
reset.onclick = function() {
    counter = 0;
    counterEl.innerText = counter;
    clearInterval(timerId);
}


// Getting datas from server (async function) ========================================

async function getResponse() {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    let news = document.querySelector('.news');

    response = await response.json();
    let card = response.splice(0, 6);
    let key;

    for (key in card) {
        news.innerHTML += `
            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="card">
                    <img class="card-img-top img-fluid" src="${card[key].url}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${card[key].title}</h5>
                    </div>
                </div>
            </div>
        `
        console.log(card[key])
    }
}

getResponse();






































