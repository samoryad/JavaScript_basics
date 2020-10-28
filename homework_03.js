'use strict'

/*Задание №1.
С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно, чтобы результат выглядел так:
0 - это ноль
1 - нечетное число
2 - четное число
3 - нечетное число
…
10 - четное число*/

// for (let i = 0; i <= 10; i++) {
//     if (i == 0) {
//         alert(`${i} - это ноль`);
//     }
//     else if (i % 2 == 0) {
//         alert(`${i} - чётное число`);
//     }
//     else {
//         alert(`${i} - нечётное число`)
//     }
// }



// Задание №2.
// Выведите в консоль значения, указанные рядом с комментариями:

// const post = {
//     author: "John", //вывести этот текст
//     postId: 23,
//     comments: [
//         {
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2 //вывести это число
//             }
//         },
//         {
//             userId: 5, //вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", //вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1
//             }
//         },
//     ]
// }

// console.log(post.author)
// console.log(post.comments[0].rating["dislikes"])
// console.log(post.comments[1].userId)
// console.log(post.comments[1].text)



/* Задание №3.
 Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%, можете использовать метод forEach https://mzl.la/1AOMMWX :*/

// const productsArray = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];

// productsArray.forEach(function (product) {
//     product.price -= (product.price * 0, 15);
// })

// console.log(productsArray);



/* Задание №4.
Перед вами находится массив с продуктами в интернет - магазине. Вам нужно:
1 Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2 Отсортируйте товары по цене(от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0*/

const productsShop = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

// 1
/**
 * Функция определения наличия фото.
 * @param {array} array Массив данных для фильтрации.
 */
// function photoAvailable(array) {
//     if (array.photos && array.photos != '') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// // 1
// let newProductsShop = productsShop.filter((photoAvailable));
// console.log(newProductsShop);

// 2
// productsShop.sort((prev, next) => {
//     if (prev.price < next.price) return -1;
//     if (prev.price < next.price) return 1;
// });
productsShop.sort((prev, next) => prev.price - next.price);

console.log(productsShop);


/* Задание №5.
(По желанию, т.к.такая особенность практически не используется) Вывести с помощью цикла for числа от 0 до 9,
    НЕ используя тело цикла.То есть выглядеть должно примерно так:*/
// for (…) {/* здесь пусто */ }
// Помните, что в первом, втором и третьем раздела цикла можно не только писать условия, или увеличивать счетчик
// например на 1, допустимы любые выражения, например вызовы функций.

// for (let k = 0; k < 10; console.log(k), k++);



/* Задание №6.
Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/
