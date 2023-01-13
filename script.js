// 1

// Какие циклы есть в javaScript?

// for, while



// 2 Создайте объект Student, добавьте ему поля на

// усмотрение удалите одно любое поле и сделайте объект неизменяемым.
 
// const student = {
//     name: 'Ilyas',
//     age: 21,
//     city:'Bishkek'
//     delete student.age
// }
// console.log(student.age)



// 3

// // Что такое Хоистинг и как его избежать при создании переменной

// hostiing mojno ispol'zovat' peremennye do ih ob'yavleniya



// // 4

// // В чем различие между slice, substr, substring и зачем они нужны

// slice - eto beret chast' stroki (0,3)- zdes' pishem s kakogo indeksa brat' on budet i s kakogo zakonchitsya
// substr() beret chast' stroki,  i  vozvrashaet kolichestvo simvolov kotorye nam neobhodimy. 
// substring() vozvrashaet chast' stroki



// // 5

// // Как мы можем получить reference error

// v kode est' identifikator kotoryi ne opredelen



// // 6

// // В чем разница между методом и функцией приведите примеры

// metod perebiraet massiv , 
// function mojno vyzvat' na lubom meste koda, i ispol'zovat' mnogo raz



// // 7

// // return внутри функций зачем он  нужен? Что вернет функция если нет return
// return dlya vozvrata naprimer nashego rezul'tata
// function ne rebotaet bez returna , budet oshibka












// 1

// напишите функцию которая принимает в себя строку состоящую из нескольких слов

// (например «lorem ipsum dolor»), а на выходе

// возвращает строку состоящую из длин каждого слова
// БЫЛО: “Ну здравствуй дивный мир”
// СТАЛО: “2  10  6  3”

// const isLength = (str) => {
//     let arr = str.split(" ")
//     let newStr= ""

//     for(i = 0; i < arr.length; i++){
//         newStr = newStr + arr[i].length
//     }
//     return newStr
// }
// console.log(isLength('Ну здравствуй дивный мир'))




// const getLength = (str) => {
//     let arr = str.split(" ")
//     return arr.reduce((acc,rec) =>  {
//         return acc + rec.length

//     },"")
// } 
// console.log(getLength('Ну здравствуй дивный мир'))





 





// 2

// напишите функцию которая принимает в себя имя, возраст, пол и на их основе возвращает

// объект. При этом необходимо провести валидацию (проверку), если возраст менее

// 18 лет, то вместо объекта вернуть строку «Не подходит по возрасту»

// const obj = (name,age,gender) => {
// let obj = {}
// obj = {...obj, name,age,gender}

// if (obj.age < 18){
//     return "Не подходит по возрасту"
// }else{
//     return obj
// }

// }
// console.log(obj('Khana', 18, 'female'))





// Для решения надо отправить github репозиторий