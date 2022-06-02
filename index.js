//What are promises and why do we need them?

//It is introduce in ES6.
//promises are used to handle asynchronous operation in js.They are easy to manage when dealing with multiple asynchronous operations where multiple callbacks and callback hells.
//this doesn't means that promises are only used for avoiding callback hells, instead are often used for handle asynchronous operations.
//promises take two executor functions
// *when the data is fully fetched the control is passed to resolve method which turn calls .then()method.
// *when the data is not fully fetched the control is passed to reject method which turn calls .catch() method.
//there are three stages in promises:
// *pending - when the promise is still executing i.e. not yet resolved or rejected are called pending stage.
// *resolve - when the promise is resolved or have fetched the data correctly, it end up being resolve state.
// *reject - when the promise fails in fetching the result it ends up being rejected state.

const promise = new Promise((resolve,reject)=>{
    let id = [1,2,3,4,5]
   resolve(id);
})

.then((result)=>{
 console.log(result);
})

//What is the purpose of async/await keywords?

//they are used to handle the promises more efficiently. the word async is used before a function to make sure that it return a promise.So, we therefore use async before the function to return a promise instead of some values/functions.
//await is used to wait for the result that is supposed to be returned from the promise. So, we can use the keyword await when calling the function which return a promise.
//async/await is also used for making the API calls.
//await is always used with async keyword only it can't never be alone.

//What is hoisting?

//Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.
//only var and function will be hoisted.
//if we do hoisting for let and const it will gives us "reference error"


var hoist;
var hoist = "hoisting";
console.log(hoist);


hoistfn();
function hoistfn(){
    console.log("hoisting function")
}

//What is the DOM?

//HTML is used to structure the web pages and Javascript is used to add behavior 
// to our web pages. When an HTML file is loaded into the browser, the javascript 
// can not understand the HTML document directly. So, a corresponding document is 
// created(DOM)(Documentary Object Model) DOM is basically the representation of the 
// same HTML document but in a different format with the use of objects. 
// Javascript interprets DOM easily i.e javascript can not understand the tags(<h1>H</h1>)
//  in HTML document but can understand object h1 in DOM. Now, Javascript can access 
// each of the objects (h1, p, etc) by using different functions.

function changetext(){
let e = document.getElementsByTagName('h1');
e[0].innerText = 'Document Object Model';
}

//Difference between undefined vs not defined vs NaN

//undefined - If a varaiable is declared but not assigned any value yet, but if we try to access that variable then we will get the error as undefined;

// var a;
// console.log(a);

//not defined - any variable which we try to access but not declared will throw us a not defined error.

// var a = 2;
// console.log(b);

//NaN - Not a number NaN is a number that is not a legal number. The Global NaN property is the same as the Number.

function sanitise(x) {
    if (isNaN(x)) {
      return NaN;
    }
    return x;
  }
  console.log(sanitise('NotANumber'));
  
  
//How many operators do we have in JS ?

// Arithmetic Operators
// Arithmetic operators are used to perform arithmetic between variables and/or values.

//+	Addition
function add(a,b){
 console.log(a+b)
}
add(2,3);

//-	Subtraction	
function sub(c,d){
    console.log(c-d)
   }
   sub(4,3);

//*	Multiplication	
function mul(e,f){
    console.log(e*f)
   }
   mul(2,7);

///	Division
function div(g,h){
    console.log(g/h)
   }
   sub(4,2);
//%	Modulus (division remainder)
function mod(i,j){
    console.log(i%j)
}
 mod(16,4)

// Comparison Operators
// Comparison operators are used in logical statements to determine equality or difference between variables or values.

//  ==	equal to
console.log(2==2)		
// ===	equal value and equal 
console.log(2==="2")		
// !=	not equal
console.log(3!=3)		
// !==	not equal value or not equal
console.log(4!=="9") 		
// >	greater than
console.log(10>7)		
// <	less than
console.log(9<3);		
// >=	greater than or equal to
console.log(8>=10);	
// <=	less than or equal to
console.log(9<=7);

// Logical Operators
// Logical operators are used to determine the logic between variables or values.

//OR
console.log(2||3);
console.log(0||1);
//AND
console.log(1&&0);
console.log(1&&2);
//NOT
console.log(!0);
console.log(!1);

//Bitwise Operators
// Bit operators work on 32 bits numbers. Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

//OR
console.log(2|3);
// AND
console.log(2&3);
// EXOR
console.log(2^3);
// left shift
console.log(2<<3);
// right shift
console.log(2>>3);

//increment and decrement operators

//increment - ++
//decrement - --

//post increment operator - a++
//it will first print the value and then it will do the operations.
//pre increment operator - ++a
// it will first operation and then print the value.

let k = 7
console.log(k++);

let l = 5
console.log(++l);




//post decrement operator - a--
//it will first print the value and then it will do the operations.
//pre decrement operator - --a
//it will first operation and then print the value.


let m = 7
console.log(m--);

let n = 5
console.log(--n);

//ternary operator

//if the condition is true it will move to statement1 whereas if the condition is false it will move to statement2.
let x=2;
let y=3;

x>y ? x++ : x--;
console.log(x);

//What are pure functions?

// A pure function is a function which:

// Given the same input, always returns the same output.
// Produces no side effects.

function calculate(sum){          
    console.log((sum+ 0.5));        
 }
 calculate(2);    

 //What is callback hell?
 //callback hell - they are just a name or convention for using javascript functions. It instead of returning results immediately like other functions, takes time to produce the result.these are more of like an I/O operations.
//callback hell - form of arrow shaped, pyramid shaped

const callbackhell = () => {
   
    setTimeout(() => {
        console.log("call");

        setTimeout(() => {
            console.log("back");
            
            setTimeout(() => {
                console.log("hell");
           
            }, 4000);
        
        }, 3000)
  
    },2000);
}

callbackhell();

//What is promise chaining

//Promise chaining is a syntax that allows you to chain together multiple asynchronous tasks in a specific order. This is great for complex code where one asynchronous task needs to be performed after the completion of a different asynchronous task.
function printVowels(Alphabet){
    return new Promise ((resolve, reject) =>{
      resolve(Alphabet);
    })
  }
  
  printVowels("A").then((response) =>{
    console.log(response);
    printVowels("E").then((response)=>{
     console.log(response);
     printVowels("I").then((response)=>{
      console.log(response);
      printVowels("O").then((response)=>{
        console.log(response);
        printVowels("U").then((response)=>{
          console.log(response);
         })
       })
     })
    })
  })
  
//What are arrow functions?
//Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. 
//but arrow function cannot be hoisted.

const arrow = () =>{
    console.log("arrow function")
}
arrow();

//Give an example of async/await

const number = (value) =>{
    return new Promise((resolve,reject) =>{
        resolve()
        console.log(value);
    })
}

async function print(){
    await number(7000);
}

print();