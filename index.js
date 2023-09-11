// const obj={
//     fn:function(){
//         console.log(this);
//     },

//     fn2:()=>{
//         console.log(this);
//     },
// };

// obj.fn();    // o/p-> obj
// obj.fn2();   // o/p->window




// const person={
// name:"akshay",
// };
// const person2={
//     name:"simran"
// };


// function x(){
//     console.log(this);
// };

// x();
// x.call(person2);
// person.print();
// person.print.call(person2);



const obj={
    firstName:"akshay",
    printName:()=>{
        console.log(this.firstName);
    },

    printName2 : function(){
        console.log(this.firstName);
    } 
};

obj.printName();
obj.printName2();
obj.printName.call();
obj.printName2.call();