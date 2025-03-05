//Task 1: Using forEach()
let city_arr = ['Los Angeles','New York','San Francisco','Lihue','Glendora'];

city_arr.forEach(city=>{
    console.log(city.toUpperCase());
});
/* 
Output : 
LOS ANGELES
NEW YORK
SAN FRANCISCO
LIHUE
GLENDORA 
*/

//Task 2: Transforming with map()

let numbers = [1,2,3,4,5];

let  squares = numbers.map(num => { return num ** 2}) ;

console.log(squares);

/* 
Output : 
LOS ANGELES
NEW YORK
SAN FRANCISCO
LIHUE
GLENDORA
[ 1, 4, 9, 16, 25 ]
 */

//Task 3: Filtering with filter()

let scores = [85, 42, 90, 75, 30,100];

let highScores = scores.filter((score=>score>=80));

console.log(highScores);

/* OUTPUT
LOS ANGELES
NEW YORK
SAN FRANCISCO
LIHUE
GLENDORA
[ 1, 4, 9, 16, 25 ]
[ 85, 90, 100 ]

*/

//Task 4: Finding with find() and findIndex()

let favoriteFood = [
    'Cake',
    'Pad Thai',
    'Pizza',
    'Biryani',
    'Shawarma',
    'Chow mein'
];
console.log(favoriteFood);

let first_food = favoriteFood.find(food=>food.length>4);

console.log(`First food with more than 4 letters is ${first_food}`);

let first_food_index = favoriteFood.findIndex(food => food == first_food);

console.log(`The index of first food with more than 4 letters is ${first_food_index}`);

/* OUTPUT
LOS ANGELES
NEW YORK
SAN FRANCISCO
LIHUE
GLENDORA
[ 1, 4, 9, 16, 25 ]
[ 85, 90, 100 ]
[ 'Cake', 'Pad Thai', 'Pizza', 'Biryani', 'Shawarma', 'Chow mein' ]
First food with more than 4 letters is Pad Thai
The index of first food with more than 4 letters is 1
*/