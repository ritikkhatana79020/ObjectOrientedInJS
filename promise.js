//Promise Syntax
// let myPromise = new Promise(()=>{
//     myResolve();
//     myReject();
// });

// myPromise.then(
//     function(value){
//         //When we get success
//     },
//     function(error){
//         //When we get error
//     }
// );

//Let's make a promise now

let p = new Promise((myResolve,myReject)=>{
    let x=1;
    if(x==1){
        myResolve("Success");
    }else{
        myReject("Error");
    }
});

p.then(
    function(value){
        console.log(value);
    },
    function(error){
        console.log(error);
    }
);