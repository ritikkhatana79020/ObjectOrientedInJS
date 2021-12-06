function myFirst(){
    console.log("myFirst called");
}

function mySecond() {
    console.log("mySecond called");
}

myFirst();
mySecond();

//A callback is a function passed as an argument to another function.
//Here display is a callback function
function display(sometext){
    console.log(sometext);
}

function calculate(num1,num2,display){
    let sum = num1+num2;
    display(sum);
}


calculate(3,3,display);
