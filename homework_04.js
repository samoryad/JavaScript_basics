'use strict'
/*Задание №1.
(это задание делайте по желанию)
Написать функцию, преобразующую число в объект.
Передавая на вход число в диапазоне [0, 999], мы должны получить на выходе объект,
в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundreds)
Например, для числа 45 мы должны получить следующий объект:
{
    units: 5, //это единицы
        tens: 4, //это десятки
            hundreds: 0, //это сотни
}
Если число было передано вне[0, 999] диапазона, не целое число или вообще не число,
    необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
Вам может пригодиться:
 Number.isInteger(value) - функция проверяет, является ли переданное число целым,
подробнее здесь https://mzl.la/2XCVSsx
 Math.floor(value) - метод возвращает целое число, которое меньше или равно данному
числу(проще говоря округляет в меньшую сторону), подробнее здесь https://mzl.la/2Qx42SO .
 Используйте также остаток от деления на 10, например 123 % 10 будет 3
 Вам также может пригодится делить число на 100 и на 10.*/




/*Задание 1.1
Сделайте в стиле es5, а затем в стиле es6(по аналогии из урока), конструктор Product,
который принимает параметры name и price, сохраните их как свойства объекта.
Также объекты типа Product должны иметь метод make25PercentDiscount, который будет
уменьшать цену в объекте на 25 %. Имейте в виду, что метод make25PercentDiscount
не должен быть внутри функции - конструктора, и также не нужно создавать отдельный
объект - прототип(как объект transport в уроке).*/

// es5
function Product_es5(name, price) {
    this.name = name;
    this.price = price;
};

Product_es5.prototype.make25PercentDiscount_es5 = function () {
    this.price -= this.price * 0.25
}

const product01 = new Product_es5("Gogi", "1000");
console.log(product01);
product01.make25PercentDiscount_es5();
console.log(product01);


// es6
class Product_es6 {
    constructor(new_name, new_price) {
        this.new_name = new_name;
        this.new_price = new_price;
    }

    make25PercentDiscount_es6() {
        this.new_price -= this.new_price * 0.25
    }
}

const product02 = new Product_es6("Ashot", "10000");
console.log(product02);
product02.make25PercentDiscount_es6();
console.log(product02);


/*Задание 1.2
Сделайте в стиле es5, а затем в стиле es6(по аналогии из урока),
а) конструктор Post, который принимает параметры author, text, date и сохраняет
их как свойства объекта.Объекты типа Post должны иметь метод edit, который будет
принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date.
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код.
Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
который будет назначать свойству highlighted значение true.*/

// a) es5
function Post_es5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
};

Post_es5.prototype.edit_es5 = function (text) {
    this.text = text
}

const post_01 = new Post_es5("Пушкин", "Метель", "1830");
console.log(post_01);
post_01.edit_es5("Выстрел");
console.log(post_01);


// a) es6
class Post_es6 {
    constructor(new_author, new_text, new_date) {
        this.new_author = new_author;
        this.new_text = new_text;
        this.new_date = new_date;
    }

    edit_es6(text) {
        this.new_text = text
    }
}

const post_02 = new Post_es6("Толстой", "Филипок", "1875");
console.log(post_02);
post_02.edit_es6("Казаки");
console.log(post_02);


// б) es5
function AttachedPost_es5(author, text, date, highlighted = false) {
    Post_es5.call(this, author, text, date);
    this.highlighted = highlighted;
};

AttachedPost_es5.prototype = Object.create(Post_es5);
AttachedPost_es5.prototype.constructor = AttachedPost_es5;
AttachedPost_es5.prototype.makeTextHighlighted_es5 = function () {
    this.highlighted = true
}

const attached_post_01 = new AttachedPost_es5("Лермонтов", "Мцыри", "1839");
console.log(attached_post_01);
attached_post_01.makeTextHighlighted_es5();
console.log(attached_post_01);


// б) es6
class AttachedPost_es6 extends Post_es6 {
    constructor(new_author, new_text, new_date, new_highlighted = false) {
        super(new_author, new_text, new_date);
        this.new_highlighted = new_highlighted;
    }

    makeTextHighlighted_es6() {
        this.new_highlighted = true;
    }
}

const attached_post_02 = new AttachedPost_es6("Некрасов", "Коробейники", "1861");
console.log(attached_post_02);
attached_post_02.makeTextHighlighted_es6();
console.log(attached_post_02);


/*Задание 2
(это задание не является частью учебной программы, делайте его по желанию).
Для игры бродилка(которая есть в дополнительных видео), добавить возможность ходить по диагонали цифрами 1, 3, 7, 9.
Также необходимо сделать так, чтобы пользователь не мог совершить шаг в стенку,
т.е.при направлении в стенку и игрок оставался на том же месте где стоял.*/




/*Задание 3
(это задание не является частью учебной программы, делайте его по желанию).
На базе игры(приняв за пример), созданной в дополнительных видео, реализовать игру «Кто хочет стать миллионером ?».
Т.е.у вас должен быть главный объект, содержащий всю логику игры, который будет иметь методы, например
метод run, возможно метод init и т.д.
В игре должны быть заранее подготовлены список вопросов и ответов(как минимум 5 вопросов).
Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и предлагать варианты
ответов в виде теста, например:
Сколько букв в слове "привет":
a.Пять.
b.Шесть.
c.Семь.
d.Куда я попал ?
Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и предложить
сыграть снова.
Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.*/

