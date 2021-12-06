class Person{
    constructor(firstName, lastName){
        this.firstName = firstName ;
        this.lastName = lastName ;
    }
    gretting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
   constructor(firstName, lastName, phone, membership){
       super(firstName, lastName);
       this.phone = phone;
       this.membership = membership;
   }  
}

const Ritik = new Customer('Ritik', 'Khatana', '7080902021', 'Standard');
console.log(Ritik.gretting());