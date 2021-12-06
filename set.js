    const letters = new Set();
    letters.add(1);
    letters.add(2);
    letters.add(3);

    console.log(letters);

    let sum=0;

    letters.forEach(
        function(n){
            sum=sum+n;
        }
    )

    console.log(sum);

    letters.delete(1);
    console.log(letters.has(1));

    console.log(letters);