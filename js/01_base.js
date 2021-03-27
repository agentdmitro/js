//  Переменные
// const firstName = 'Vladilen'
// const age = 26
// const isProgrammer = true



// const $ = 'some value'
// const withNum = 5 

// 2 мутирование

// alert('Имя человека: ' + firstName  + ',возраст: ' + age)
// console.log(age)

// const lastName = prompt( 'Введите фамилию')
// alert(firstName + '' + lastName)

// 3 Operators 


// let currentYear = 2020
// const birthYear = 1993

// const age = currentYear - birthYear

// console.log(age)

// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c += a
// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)


//  4 Типы данных

// const isProgrammer = true 
// const name = 'Dmitro'
// const age = 15
// let X
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof X)
// console.log(typeof null)


//  5 Приоритет операторов 

// const fullAge = 15
// const birthYear = 2005
// const currentYear = 2021

// const isFullAge = (currentYear - birthYear) >= fullAge
// console.log(isFullAge)


// 6 Условные операторы

// const courseStatus = 'fail'  

// if(courseStatus === 'ready'){
//     console.log('Курс уже готов и его можно проходить')
// } else if(courseStatus === 'pending'){
//     console.log('Курс пока находится в процессе разработки')
// } else{
//     console.log('Курс не получился')
// }

// const isReady = false

// if(isReady){
//     console.log('Всё готово!')
// }else {
//     console.log('Всё не готово!')
// }

// 8 Функции =====

// function calculateAge(year){
//     return 2021 - year
// }
// console.log(calculateAge(2005))
// console.log(calculateAge(1994))
// console.log(calculateAge(2017))

// function loginInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if(age > 0){
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     }else{
//         console.log('Вообще-то это уже будущее')
//     }


// }

// loginInfoAbout(name = 'Дима' , year = 2005)
// loginInfoAbout(name = 'Елена' , year = 2000)
// loginInfoAbout(name = 'Елена' , year = 2022)

// 9 Масивы

// const cars = ['Мазда' , 'Мерседес' , 'Форд']
// const cars = new Array ('Мазда' , 'Мерседес' , 'Форд')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = 'Porsche'
// console.log(cars)

// cars[cars.length] = 'Мазда'



//  10 Циклы =============================


// const cars = ['Мазда' , 'Мерседес' , 'Форд' ,'Porsche']

// for (let i = 0; i < cars.length; i++){
//     const car = cars[i]
//     console.log(car)
// }

// for ( let car of cars){
//     console.log(car)
// }


// 11 Объекты

// const person = {
//     firstName: 'Dmitriy',
//     lastName: 'agent',
//     year: 2005,
//     languages: ['Ru', 'Ua', 'En'],
//     hasWife: false,
//     greet: function() {
//         console.log('greet from person')
//     }
// }
// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'year'
// console.log(person[key])
// person.hasWife = true
// console.log(person)
// person.isProgrammer = true
// person.greet()












