//There are 2 ways to declare map 
//first is that create a map by passing an array

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(fruits);


//or you can do the same with the help of set
const fruits1 =new Map();

fruits1.set("Apples", 500);
fruits1.set("Bananas", 300);
fruits1.set("Orange", 200);

console.log(fruits1);

//lets see how to get the values from map 
const getitem = fruits1.get("Apples");

console.log("get item is",getitem);

console.log(fruits1.size);

// fruits1.delete("Apples");
console.log(fruits1.has("Apples"));

let text="";

fruits.forEach(
    function(key,value){
        text = text + key+" " +value +" ";
    }
)

console.log(text);