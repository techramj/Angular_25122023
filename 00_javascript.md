# Use of Javascript.
- Front-end
- back-end
- mobile
- desktop


## Front end Javascript
1. React
2. Angular
3. Vue
4. many more


    Jquery: it is the popular library of JS. HTML manupulation , even handling, network request etc.
    Vanila JS is just javascript without any libraries.


# Javascript features.
1. Js is an interpreted language.
-  Executed without compiling
-  read actual js code at runtime, not bytecode
  
2. JS is dynamically and weakly typed.

3. JS has strong support for OOP.
4. JS is single-threaded

# Pros & Cons
## pros
1. popular
2. easy to learn and use.
3. can be used for wide range of application

## cons
1. problem with the browser support
2. security

# differnce between var and let
    var is function scoped while let and const are block scoped

## var
    function foo(){
        var a= 10;
        if(true){
            var b= 20;
            console.log('a=',a,'b =',b);
        }
        console.log('a=',a,'b =',b);
    }
    foo();
    //console.log('a=',a,'b =',b); error


## let
    function foo(){
    let a= 10;
    if(true){
        let b= 20;
        console.log('a=',a,'b =',b);
    }
    console.log('a=',a,'b =',b); //error b can be access only in if block
    }

    foo();
    //console.log('a=',a,'b =',b); error

## global variable
    function foo(){
        a= 10;
        if(true){
            b= 20;
            console.log('a=',a,'b =',b);
        }
        console.log('a=',a,'b =',b); 
    }

    foo();
    console.log('a=',a,'b =',b);


# Javascript Data type
1. number
2. string
3. boolean
4. object
5. function
6. undefined
7. bigint
8. symbol

## number
    let natural = 10;
    let decimal = 10.123;
    let hexadecimal = 0x1A;
    let binary = 0b1010;
    let octal = 0o73;
    let twoLakh = 2e6;

    console.log(natural, typeof natural);
    console.log(decimal, typeof decimal);
    console.log(hexadecimal, typeof hexadecimal);
    console.log(binary, typeof binary);
    console.log(octal, typeof octal);
    console.log(twoLakh, typeof twoLakh);

    output:
    10 number
    10.123 number
    26 number
    10 number
    59 number
    2000000 number

    note: Infinity and NaN is a number.

    let a = 10/0;
    console.log(a, typeof a); // Infinity, number

    let b = 10 * 'apple';
    console.log(b, typeof b); // NaN, number

## string
    let singleQuote = 'I am a single quote string';
    let doubleQuote = "I am a double quote string";
    let backTick = `I am a backtick string`;

    let a =10;
    let b= 20;

    let c =`a=${a}, b=${b}`; 
    let d ='a=${a}, b=${b}'; 

    console.log(c); //a=10, b=20
    console.log(d); //a=${a}, b=${b}

## boolean
    true and false are the two value in boolean.

falsely value
1.  false
2.  0
3.  '' "" ``
4.  null
5.  undefined
6.  NaN
7.  0n

# function
    syntax:
    function add(a, b) {
        let c = a + b;
        console.log('add =', c);
    }

    let add1= function(a,b){
        let c = a + b;
        console.log('add1 =', c);
    }

    let add2  = (a,b) =>{
        let c = a + b;
        console.log('add2 =', c);
    }

    add(10,20);
    add1(100,200);
    add2(1000, 2000);

## function hosting

    add(10,20); //possible
    add1(100,200); //error
    add2(1000, 2000); //error

    function add(a, b) {
    let c = a + b;
    console.log('add =', c);
    }

    let add1= function(a,b){
    let c = a + b;
    console.log('add1 =', c);
    }

    let add2  = (a,b) =>{
    let c = a + b;
    console.log('add2 =', c);
    }

## undefined
    let a = Infinity;
    console.log(a, typeof a); //undefined undefined

## bigint
    let a = 123456789012345638;
    console.log(a, typeof a); //1234567890123456500 number

    let a = 1234567890123456389n; 
    console.log(a, typeof a); //1234567890123456389n bigint

    let a  =4n;
    let b = 5n;
    let c = a + b;

    let d = 5;
    //let e = a + d; //error
    let f = a + BigInt(d);

    console.log(c);
    console.log(f); 

## symbol
    let a = Symbol(10);
    let b = Symbol(10);
    console.log(a == b);


### diffence between == and ===
    == compare the value
    === compare the type and the value

    let a = 10;
    let b = 10;
    let c = '10';

    console.log(a==b);//true
    console.log(a==c); //true
    console.log(a===c); //false


## object
    let person = {name:'Jack', age:29, nationlity:'USA'};
    console.log(person, typeof person);

    let name = person.name;
    console.log(name);

    let age = person.age;
    console.log(age);

    let hairColor = person.hairColor;
    console.log(hairColor);

    person.hairColor = 'Black';
    console.log(person);

- to access property , we can use dot operator(.) or bracket([])

        let person = {name:'Jack', age:29, nationlity:'USA'};
        console.log(person, typeof person);


        console.log(person.name);
        console.log(person['name']);

        let operations = { '+' : 'plus', '-' : 'minus', '*' : 'multiply', '/' : 'divide'};
        console.log(operations['+']); //can be accessible only with square bracket

- null is an object
- we can use variable for key and value

        let name = 'jack';
        let age = '20';

        let person = {'name':name, 'age':age};
        console.log(person); // { name: 'jack', age: '20' }

        let person1 = {name,age};
        console.log(person1); // { name: 'jack', age: '20' }

### array
    let arr = [10,20,30,40];
    let n = arr.length;
    console.log(typeof arr);


    //iterate the array
    for(let i=0; i< arr.length; i++){
    console.log(arr[i]);
    }

    console.log('-----------------');

    //iterate the array using for of loop
    for(let a of arr){
    console.log(a);
    }

    console.log('-----------------');

    //iterate the array using for of loop
    arr.forEach(function(x){
    console.log(x);
    });

    console.log('-----------------');
    //iterate the array using for of loop
    arr.forEach(x=> console.log(x));

#### function of an array
- push

        let arr = [10,20,30,40];
        arr.push(100);
        console.log(arr); //[ 10, 20, 30, 40, 100 ]

- pop

        let arr = [10,20,30,40];
        arr.pop();
        console.log(arr); //[ 10, 20, 30];

- indexOf

        let arr = [10,20,30,40,10];
        console.log(arr.indexOf(30)); //2
        console.log(arr.indexOf(300)); //-1
        console.log(arr.indexOf(10)); // 0
        console.log(arr.indexOf(10,2)); // 5

- filter
    
        //array with even number
        let arr = [1,2,3,4,5];
        let everArr =[];
        for(let a of arr){
        if(a%2 ==0){
            everArr.push(a)
        }
        }
        console.log(everArr);

        console.log('-----------------');

        let everArr1 = arr.filter(x => x%2==0);
        console.log(everArr1);

- map
        //array with square of element
        let arr = [1,2,3,4,5];

        let squareArr =[];
        for(let a of arr){
        squareArr.push(a*a);
        }
        console.log(squareArr);

        console.log('-----------------');

        let squareArr1 = arr.map(x => x*x);
        console.log(squareArr1);

- splice( startingIndex, howManyToRemove, ...elementsToAdd);

        let arr = [10,20,30,40];
        //delete element 30
        arr.splice(2, 1);
        console.log(arr); //[ 10, 20, 40 ]

        //delete element 30,40
        arr.splice(2, 2);
        console.log(arr); //[ 10, 20 ]


## class based vs prototype based object
### class based
    class Person{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }

        sayHello(){
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

    let p1 = new Person("John",30);
    let p2 = new Person("Jane",25);
    p1.sayHello();
    p2.sayHello();

### prototype based
    let person1 = 
    {name:'John',
    age:30,
    sayHello:function(){
                    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
                }
    };

    person1.sayHello();





