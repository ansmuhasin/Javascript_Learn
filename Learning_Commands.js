//! What is Javascript
//+ JavaScript is a dynamic, weakly typed programming language which is compiled at runtime. It can be executed as part of a webpage in a browser or directly on any
//+ machine (“host environment”).
//+ JavaScript was created to make webpages more dynamic (e.g. change content on a page directly from inside the browser). Originally, it was called LiveScript but due to
//+ the popularity of Java, it was renamed to JavaScript.
//+ JavaScript is totally independent from Java and has nothing in common with Java
//+ JavaScript is case sensitive
// !Dynamic? Weakly Typed
//+ Dynamic, interpreted Programming Language.
//+ Not pre-compiled, instead parsed and compiled “on the fly” (e.g. in the browser)
//+ Code evaluated and executed at runtime. Code can change at runtime (e.g. type of a variable)
//+ Weakly Typed Programming Language
//+ Data types are assumed (e.g. assigned to variables) automatically. You don’t define that some variable has to hold a certain value (e.g. a number) .
//+ Data types are not set in stone but can change

//! JavaScript Runs On A Host Environment
//+ Browser-side
//+ JavaScript was invented to create more  dynamic websites by executing in the  browser! JavaScript can manipulate the HTML code, CSS, send background Http requests & much more
//+ JavaScript CAN’T access the local filesystem, interact with the operating system etc
//+ “Other” (e.g. Server-side)
//+ Google’s JavaScript Engine (V8) was  extracted to run JavaScript anywhere  (called “Node.js”) Node.js can be executed on any machine and is therefore often used
//+ to build web  backends (server-side JavaScript) Node.js CAN access the local filesystem, interact with the operating system etc. It CAN’T manipulate HTML or CSS

//* To import the js file
//* <script src="./assets/scripts/app.js"></script>
//+if we put  this at the end of the html. then the js execute at the end. if we put at the beginning js will execute before html rendering
//% It is not working for me 😢

//! Variables and constants
//+ we can use let keyword to initialize a variable. and we can change the value along the way
let variableName = "value";
//+ we can use constant as well. the value is not changable and throws error
const constantName = "value";

//+ there are operators like + - * / % and ** for exponential. also =

//+ we can use '' or "" for assigning string. but we ca use ``  this as well
let out = `(${variableName} + 10) * 3`; //+ we can use this to get the value between the string. this is called template literals
out = `one + one = ${1 + 1}`; //+ we can do any normal code here
//+ we can use \n for next line. for backslash we need double \\

//! functions
function name(parameter) {
  parameter = parameter; //+ we can do some operation
}

//+ javascript always read the data from the input as strings
//+ we can use parseInt and parseFloat for converting from string. we can use +stringValue as well
parseInt("3");
out = 1 + +"10"; //+ we can do something like this as well

//+ to convert a number to string we can use .toString()
out = out.toString();

out++; //+ returns the value before it changes
++out; //+ returns the value after it changes

let array = [];
array.push(1); //+ we can add value to array like this
let anObject = { name: "abc" };
//+ we can push object to array as well

//+ undefined is a default value of uninitialized variable
//+ null is not a default value, we have to set something to it
//+ NaN is not a number. when we do a mathematical operation with a value which is not a number. we will get NAN 3*'hi

typeof "name"; //+ to find the type of the variable. this returns "string"

//! Importing of a file
//+ while importing javascript file. its good to add defer keyword . it will make the js file downloaded early and executed after rendering of html
//* <script type="text/javascript" src="./assets/scripts/app.js" defer></script>

//+ we can use async as well, if we want to download the js and execute the same time as the html render. good when js is not related to the html.
//+ order of execution of script is not guaranteed here. if there are two script importing.. then both can execute same time

//+ ctrl + shift + space for help parameter menu
//+ we can use source window for finding the code and putting debugger. also we can put conditional breakpoint aswell.
//+ we can change the values of file directly to the local file from browser without reloading. also we can select event listeners to trigger debugging

//+  === operator is used to check the value as well as the type

//+ we cannot check eqquality of 2 objects which are looks same. it gives false
let v1 = { name: "Max" };
let v2 = { name: "Max" };

v1 == v2; //+ it will be false but
let v3 = v1;
v3 === v1; //+ this will be true

//! Operator precedence
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//! truly and falsy values
//+ In some cases, even if we don't provide any condition bolean check, still js can return true or false, if the variable is a truely value
let nameCheck = "Max";
if (nameCheck) {
  //+ this can return true
}

//+ 0 will return false
nameCheck = 0;
if (nameCheck) {
} //+ this will be false. other numbers including -ve values will be true

//+ '' will be false. any other string will be true. {} [] and other objects will be true. null undefined and NaN will be false

//+ we can use event listeners to a element using addEventListener
attackBtn.addEventListener("click", attachHandler);
//+ here attachHandler is a function that we need to call

//+ we can use prompt function to see a popup where we can type some value

//+ we can use isNaN function for checking the value is NaN or not
isNaN(nameCheck);

//+Ternary Operator
nameCheck = isLogin ? "Login" : null;

//% !! can be used to convert the truthy or falsy value to real true or false
!!""; //+ this will give false than falsy value
!!1; //+ This will give true than truthy value

//% Default value assignment via OR operator
nameCheck = someInput || "Max"; //+ if someInput is empty, Max will be assign to the const

//% use value if condition is true via AND operator
nameCheck = isLoggedIn && "Max"; //+ Max is returned if isLogged is true. false otherwise. here isLogged in is a real true or false value

//! switch Case statement
switch (ev) {
  case "value1": //+ condition
    "value1 + 1"; //+ code need to be executed
    break;
  case "value2":
    "value 2 +1";
    break;
  default:
    "value 3 +1";
}

//! Loops
//% for loop
//+ Execute code a certain amount of times (with counter variable)
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//% for 0f loop
//+Execute for every element in an array
for (const el of array) {
  console.log(el);
}

//+ if we need to know the index, we can use extra code. but the loop does not provide the index details
let i = 0;
for (const el of array) {
  console.log(i);
  console.log(el);
  i++;
}

//% for in loop
//+ Execute for every key in an object
for (const key in obj) {
  console.log(key);
  console.log(obj[key]);
}

//% while loop
//+ Execute code as long as a condition is true
while (isLoggedIn) {}

//%
do {} while (isLoggedIn);

//% we can use break keyword to break the loop
//% we can use continue to continue to next loop

//% labeled statements
//+ if we want to break the outer loop from the inner loop we can name the loops and break using the name

outerWhile: while (isLoggedIn) {
  innerFor: for (const el of array) {
    console.log(i);
    console.log(el);
    i++;
    break outerWhile;
  }
}

//! error handling
//% we can use throw keyword to throw error
throw { message: "An error occurred" };
//+ if we throw the error then the application crashes and none of the other code execute  than finally
//% try catch
try {
  for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
  }
} catch (error) {
  alert(error);
  console.log(error);
} finally {
}

//% ES5
//+ Supported in basically all browser, including old IE
//+ Only had var, not let or const
//+ Generally same syntax as ES6, but quite some missing feature

//% ES6
//+ Supported in modern browsers, can (mostly) be transpiled to ES5
//+ Many new features that help us write cleaner, better & faster code
//+ Still under active development, but ES6 was a big step forward

//% var and let
//+ if we initialize a global variable as name. and if we initialise samevariable again inside the function, it will not throw error. it will shadow the global variable. but if we re create same variable using let in global scope. it throws error.
//+ but for var, we can re create the variable in global scope as well.

//+ let and const are available in block level. inside{}. and will not be available outside
//+ we can use both let var and const in global scope

//+ if we initialize the variable using var at the end of code and try to use it before initialization, it will not throw error and return undefined as value
//+ but let and const will throw error.
//+ let and const is block level, available inside the if statement only
console.log(userName); //+ here output will be undefined. but for let, it will be an error. because for var, the variable is initialized with undefined.

var userName = "Ans";

//+ if we dont mention var while initializing a variable. it will still work
userAge = 100; //+ this will work, and js automatically add var.
//+ we can turn this off bu turning on strict mode
("use strict"); //+ this will turn on strict mode

//! Primitive vs Reference Values
//% Primitive Values
//+ Strings, Numbers, Booleans, null, undefined, Symbol
//+ Stored in memory (normally on Stack), variable stores value itself
//+ Copying a variable (= assign to different variable) copies the value

//% Reference Values
//+ All other objects (“more expensive to create”)
//+ Stored in memory (Heap), variable stores a pointer (address) to location in memory
//+ Copying a variable (= assign to different variable) copies the pointer/ reference

//% to copy object tot new object, we can use
let person = { age: 30 };
let newPerson = { ...person }; //+ this will create a new object with different reference
let hobbies = ["cricket"];
let moreHobbies = [...hobbies];

//!garbage collector

//! Functions

//+ if we attach a function to an object, then its called a method
//+ functions are objects
//+ we can attach a function inside a variable
let start = function startGame() {
  alert("Starting game");
};
//+ but in this case, we need to call it after initialized. if we try to call the function before initialized it will return undefined.
//+ but normal function can be aclled from anywhere without initializing.it automatically calls the function

//% Anonymous functions
attackBtn.addEventListener("click", function () {
  alert("Starting game");
});
//+ we can add a anonymous function like this.
attackBtn.addEventListener("click", function startGame() {
  //+ we can give name to the anonymous function as well
  alert("Starting game");
});

let start = (value) => {
  alert("Starting game");
};
//+ we can declare a anonymous function like this

let start = (value) => value + 1;
//+ we can us this as well and directly return
//+ if there is no statementts in the body, we should use {}
//+ if there is one parameter, we can omit the ()
//+ one statement, then we can eliminate {}
//% we can use .toUpperCase() in a string to convert it to uppercase.

let start = function startGame(value, value2 = 10) {
  alert("Starting game");
};
start(1); //+ here second value by default it will be 10.  even if we pass undefined, still it will take the defualt value

let start = function startGame(...value) {
  //+here everything we pass will be consider as a array
  let sum = 0;
  for (const el of value) {
    sum += el;
  }
  return sum;
};

start(1, 54, 7, 2, 77, 2); //+ Input values will be converted to an array
//+ always better to declare this parameter at the end
//+ we can use arguments keyword to get the input as array as well.
let start = function startGame() {
  //+here everything we pass will be consider as a array
  let sum = 0;
  for (const el of arguments) {
    //+ we will get inputs as array
    sum += el;
  }
  return sum;
};

start(1, 54, 7, 2, 77, 2);

//% callback functions
//+ we can pass a function as variable and we can ustilise that funvction
let start = function startGame(resultHandler, ...values) {
  //+here everything we pass will be consider as a array
  let sum = 0;
  for (const el of values) {
    //+ we will get inputs as array
    sum += el;
  }
  resultHandler(sum);
};
const alertResult = (sum) => alert("the result is" + sum);

start(alertResult, 1, 56, 83, 6, 98, 4, 2); //+ we can pass the function as the variable
//+ here we are passing a pointer to the function and we are finally calling the function. this is how event handler works
//+ if we want to pass some values to  the callback function early itself, we can pass it using .bind() method. first argument is this, then we can pass other inputs. whenever we pass more parameters to the callback function
let start = function startGame(resultHandler, ...values) {
  //+here everything we pass will be consider as a array
  let sum = 0;
  for (const el of values) {
    //+ we will get inputs as array
    sum += el;
  }
  resultHandler(sum); //+ here the second argument wll be send to the already bind function
};
const alertResult = (message, sum) => alert(message + sum);
start(alertResult.bind(this, "output is : "), 1, 56, 83, 6, 98, 4, 2); //+ here the 'output is : ' will send as first argument to the callback function.

//+ .apply() and .call() methods will immediatly call the function. start.call()

//! The Document Object Model (DOM)
//+Exposes Web API to allow JavaScript to work with the parsed document

//! Document and window
//% document
//+ root dom node. provide access to element querying . dom content etc. document is part of window
//% window
//+ the active browser window/ tab. acts as global storage for script , also provide access to window specific properties and methods

//% there are element node as well as text node in DOM
//+ element node is the representation of the element. and text node is representation of text.

//% querySelector(), getElementById() returns single element. different ways of querying elements(by css selector, by id). Direct reference to DOM is returned
//% querySelectorAll(), getElementByTagName() Return collection of elements(array like object) nodelist. different ways of querying elements by css selector , by tag name , by css class). quey selectorAll() returns a non-live Nodelist, getXbyY returns live nodelist

//! finding the elements
document.getElementById("main-title");
document.getElementsByClassName("items"); //+ this is old way of using it
document.querySelector(".items"); //+ this will return only the first item. we can select class or id or elements
document.querySelectorAll(".items"); //+ this will return multiple items
document.querySelector("ul li:first-of-type");

const ul = document.getElementById("list");
ul.querySelector(".items"); //+ we acn so this as well. but we cannot use getElementById

//!text content
const h1 = document.getElementById("main-title");
h1.textContent; //+ this will return the text content
h1.className; //+  will give the class name.

//! style
//+ we can access the styling
h1.style.background = "red";

const input = document.querySelector("input");
input.value = "new input"; //+ this will reflect to the UI. but not in the html element
input.setAttribute("value", "some other default text"); //+ we can set attribute like this

input.getAttribute("value"); //+ we can use this to get the attribute

//!Children
const ul = document.querySelector("ul");
ul.children; //+ for finding the children.     ul.children [0]

ul.childNodes; //+ this will provide both text as well as element node

ul.firstElementChild; //+ this can be used to find the first element child

//!Parent
ul.children[0].parentElement; //+  ul.children[0].parentNode    both will be same
ul.children[0].closest("body"); //+ closest will give parent

//! Sibling
ul.previousElementSibling; //+ can be used to find the sibling
ul.nextElementSibling;

//! Styling
ul.style.background = "green";
ul.className = "bg-green"; //+ this will completely replace the classes

ul.classList.toggle("visible"); //+ this will add or remove depends on the availability of class

//! adding elements
//+ we can add inner html. replace it or we can append.. but in this case the innerhtml is re render, which deletes the user entered info

//+ we can use like this as well
input.insertAdjacentHTML("afterend", "<p>some content</p>");
//+ <!-- beforebegin -->
//+ <p>
//+   <!-- afterbegin -->
//+   foo
//+   <!-- beforeend -->
//+ </p>
//+ <!-- afterend -->

const newLi = document.createElement("li"); //+ we can create an element like this. but do it only on document
const list = document.querySelector("ul");
newLi.textContent = "item 4";
list.appendChild(newLi); //+append the element to the other element

list.append("new value"); //+ we can use append as well. IE dowsnt support
movieListElement.append(movieListItem);
list.prepend(newLi); //+ this will add at the beginning

list.lastElementChild.before(newLi); //+ we can add before the last element. after work as well

replaceWith(); //+ used for replacing
list.insertAdjacentElement("afterend", newLi); //+ we can use like this as well

//+ cloning element
newLi.cloneNode(true); //+ it will clone the element. if we pass true, everything inside will be cloned. if false, only that element is cloned

//+ querySelectorAll() is having live value
//+ .getElementByClassName() or other similar will not be live

//! Remove
const list = document.querySelector("ul");
list.remove(); //+ this will remove the content
list.parentElement.removeChild(list); //+ this will work as well

//+ for selecting an element we can use multiple ways
document.querySelector("body button");
document.getElementById("buttonID");
document.body.children[3];
document.querySelector("header").lastElementChild;

//+ getElementById can be faster. last two of them can have some risks

title.trim(); //+ can be used to trim the text
movies.splice(index); //+ can be used to remove the array on specific index
movieListElement.children[index].remove(); //+ deleteing the item using index

//+ if we initialize a button event inside another button event. it can lead to multiple existing event on a single button and leads to problem.
//+ there are technique to solve it. for now we can use these approaches
cancelDeleteButton.removeEventListener("click", closeTheModal); //+ we can simply remove the event listener

//+ if the event listener function have a bind. then it will  not be possible to delete. so we can do a hack
let confirmDeletePopupButton = deleteModalElement.querySelector(".btn--danger");
confirmDeletePopupButton.replaceWith(confirmDeletePopupButton.cloneNode(true)); //+ we can replace the button with another. so this will remove all the even listeners
confirmDeletePopupButton = deleteModalElement.querySelector(".btn--danger");

//! Arrays
//% Iterable
//+ object where we can use for-of-loop.
//% Array-like
//+ Object that have a length property and indexes to access them.

//% but they ar not real array
//! Creating an array
const myarray = [1, 2, 3];
const myarray2 = new Array(); //+ this is equals to []  . we can remove new keywork, it will work
const myarray3 = new Array("hello", "world"); //+ this is equals to []

const myarray4 = new Array(5); //+ this will create an empty array of size 5
const array5 = Array.of(1, 2); //+ this will work as well.

const array6 = Array.from(someIterable); //+ this is used to convert an iterable or array like object to array
const array6 = Array.from("Hi!"); //+ this will create ['H', 'i', '!']

const listItems = document.querySelectorAll("li"); //+ this will create a node list. which is not an actual array. but array like object. all array methods will not be there
const array6 = Array.from(listItems); //+ this will convert to real array

const myarray5 = [1, "23"]; //+ we can have different type
const array6 = [
  [1, 2],
  [6, 7],
]; //+ we can have multi dimentional array

myarray[0]; //+ can use index. 0index

//! push and pop
myarray.push(5); //+ this can be used to push new items at the end of the array. this will return the length as well, if we need it
myarray.unshift(10); //+ this will add at the beginning of the array. this will return the length as well, if we need it
const removedItem = myarray.pop(); //+ last element is removed at the end and returned
myarray.shift(); //+ it removes first item from the array and returned
//+ shift and unshift are slower than push and pop

myarray[2] = 6; //+ this will replace the item
myarray[10] = 10; //+ if we try to add it to some none existing index, it add empty items in between and add the item to that index.

//! splice
myarray.splice(1, 1); //+ this will delete the second item. it will go to 1 index and delete next 1 item. we can delete multiple items
myarray.splice(0, 2); //+ this will delete 1st 2 elements

myarray.splice(0, 0, "hello", "how are you"); //+ this will go to first element and delete next 0 elements and then insert the elements mentioned. as we mention 0 as delete, it will not delete anything, instead insert next items
myarray.splice(1, 2, "hello", "how are you"); //+ this will go to 1 index and delete next 2 items and then insert in the middle. if we don't want to delete, we can give the delete index as 0

myarray.splice(2); //+ this will delete everything past to index 0
myarray.splice(0); //+ this will delete everything in the array

//% splice will return the removed items

myarray.splice(-1, 1); //+ due to -1. this will go to the end and do the operation. here last element  is deleted. -2 will go to second last element

//! slice
const newArray = myarray.slice(); //+ this can be used to return a new array
const slicedArray = myarray.slice(1, 2); //+ this will go to 1st index and select 2 elements and return a new array. we can use -ve values as well
const resatArray = myarray.slice(2); //+ this will get everything after 2nd index.

//! concat
newArray = myarray.concat([5, 6, 7]); //+ this will add one array to another array. push will not work this way, push accepts multiple items

const index = myarray.indexOf(3); //+ this will find the index of that specific value. if there are multiple same values, it only returns the first index.
index = myarray.indexOf(3, 2); //+ this will search after 2nd index.

index = myarray.lastIndexOf(2);
//+ but finding index of a object will not work and returns -1
//+ if it didnt find anything.it returns -1

//! find
//+ we can use find to find the object in an array.
const personalData = [{ name: "Max" }, { name: "Manual" }];
manual = personalData.find((person, index, persons) => {
  //+ first parameter is item from the array. second parameter is index. third parameter entire array.
  return person.name === "Manual"; //+ this will return that specific object which became true;
});

personalData.findIndex(manual); //+ this can return the index of the object

myarray.includes(5); //+ this will returns true or false if the value exists.

//! foreach
prices = [13, 53, 65, 23];
newPrices = [];
prices.forEach((price, index, prices) => {
  //+ we can use foreach for loop operation and index will be available here. for loop will not have
  newPrices.push({ id: index, price: price * 1.2 });
});

const adjPrices = prices.map((price, index, prices) => {
  //+ map should return something. so here we can return the object and it will be combined as a array and we get it as an array
  const priceObj = newPrices.push({ id: index, price: price * 1.2 });
  return priceObj;
});
//+ it will return a new array. and it will not change the parent array

//! Sort
const sortedPrice = prices.sort((a, b) => {
  //+ a and b are adjuscent elements
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

sortedPrice.reverse(); //+ this will reverse the elements

//! filter
const filteredArray = prices.filter((price, index, prices) => {
  //+ here the array which met the condition will be returned and, which does not meet will be not returned. returned items will create a new array. it will not modify the existing one.
  return price > 100;
});

const filteredArray = prices.filter((price) => price > 100); //+ as we only use price, we can make it as a single parameter.

//! reduce
//+ reduce will reduce an array to a single value
const sum = prices.reduce((prevValue, curValue, index, prices) => {
  //+ here we will get previous value of operation. and current value. index and prices array itself
  prevValue + curValue; //+ in each execution, this operation will take place. and the result will send as prev value for the next execution
}, 0); //+ the second parameter is the initial value, which is 0 here. so 0 will be given as previous value in the first execution.
//+ when there is no element left to execution, the result will return

//! Split and join
value = "hello;world;good;morning;";
newArray = value.split(";"); //+ this will split the string to an array

newArray = ["kerala", "tamil"];
value = newArray.join(" "); //+ this will join the arrays and we can mention the separator. here its a white space

//! Destructuring
newArray = ["kerala", "tamil"];
const stateOne = newArray[0];
const stateTwo = newArray[1];
//+ the same thing we can do like below

const [stateOne, stateTwo] = newArray; //+ this will do the same and create the variable from the array;
newArray = ["kerala", "tamil", "karnataka", "andhra"];
const [stateOne, stateTwo, ...otherStates] = newArray; //+ here otherStates will contain all the remaining items from the array.

//% Arrays
//+ Store (nested) data of any kind and lengthIterable, also many special array methods availableOrder is guaranteed, duplicates are allowed, zero-based index to access elements
//% Sets
//+ Store (nested) data of any kind and length Iterable, also some special set methods availableOrder is NOT guaranteed, duplicates are NOT allowed, no index-based access

const ids = new Set([1, 2, 3]);
//+ we can't do ids[1]. not indexed
ids.has(1); //+ this will check if the set have that specific value. and the set does not contain duplicated.

ids.add(2); //+ this wont work. because set is unique

ids.delete(3); //+ for delete
//% Maps
//+ Store key-value data of any kind and length, any key values are allowedIterable, also some special map methods availableOrder is guaranteed, duplicate keys are NOT allowed, key-based access
const person1 = { name: "John" };
const person2 = { name: "Max" };

const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]); //+ creating a map. here person1 is the key. it can have any data.
personData.get(person1); //+ this will return the value for the key.

personData.set(person2, [{ date: "today", price: 20 }]); //+ this will adda new data to map

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}
for (const value of personData.values()) {
  console.log(value);
}
//+ map can use objects as keys.but object can't. better performance for big data. better performance for adding and removing data.

//! Objects

const userSelectedKey = "level";
let personData = {
  name: "Max",
  age: 20,
  greet: function () {
    alert("Hi There");
  },
  hobbies: ["batman", "super man"],
  "place live": "kerala", //+ we can do like this with spaces and special corrector
  [userSelectedKey]: "something", //+ here key name will be level
  1.5: "hello", //+ this work as well. we can access using Data[1.5]
};

personData.isAdmin = true;

delete personData.hobbies; //+ this will delete the property
personData.hobbies = undefined; //+ not a good approach
personData.hobbies = null;

personData["place live"]; //+ we can access the element like this
const key = "place live";
personData[key]; //+ this will work as well

movieList.style["background-color"]; //+ we can use like this

stringValue.includes("an"); //+ string have include method for contain search
//% spread operator
copiedPersonData = { ...personData }; //+ this will copy the  data and create a new reference.

copiedPersonData = { ...personData, age: 30 };

//% another way of copying
copiedPersonData = Object.assign({}, personData);

//% Object destructuring
//+ same as arrays
const { name, age, ...otherData } = personData; //+ this will create the variable and store the matching values
//+ if we want a different name for the variable. then we can do that as well
const { name: userName, age, ...otherData } = personData; //+ here the name will be saved to variable called userName

//% to check the existance of a property
if ("name" in personData) {
  //+ this will check the existance of name property.
}

//% this
//+ this will point to the object responsible for that specific function. not the object which surrounds it.
let AnotherPersonData = {
  name: "Max",
  age: 20,
  formattedName: function () {
    return this.name.toUpperCase(); //+ here this will point to the parent object.
  },
};
AnotherPersonData.formattedName(); //+ here will return uppercase name. here anotherPersonData is responsible for calling the function. so it will be the this object
AnotherPersonData = {
  name: "Max",
  age: 20,
  formattedName() {
    //+ we can reduce the syntax for a function like this
    return this.name.toUpperCase();
  },
};

//+ this will not work when we try to call the function differently.
const { formattedName } = anotherPersonData;
formattedName(); //+ this will not work. here this is not anotherPersonData. because anotherPersonData is not responsible for calling this function. here this will be window or undefined

//+ to fix this. we can use bind and pass this parameter. bind first parameter is this
let { formattedName } = anotherPersonData;
formattedName = formattedName.bind(anotherPersonData); //+ now this will be referring to anotherPersonData.and it will work

//+ we can use call() function as well. so we can directly call by passing the object
formattedName.call(anotherPersonData); //+ here we directly call by passing this as anotherPersonData

//% this on a event listener
addMovieButton.addEventListener("click", addMovie);
function addMovie() {
  console.log(this); //+ here the function call is responsible by event. so ths will be the button which triggered the event
}

const addMovie = () => {
  console.log(this); //+ but it will not work for a arrow function. this doesnt mean anything in arrow function. so this is considered as a objet from the outside.
};

//+ arrow function will be helpful when we need the this object from upper object. this object from the upper object can be
//+ available directly to the arrow function. but this will fail for the normal function. for example a normal function inside a
//+ foreach will get this as window object. instead a arrow function will get previous this

//!% Get and set
AnotherPersonData = {
  set name(value) {
    this._name = value.toUpperCase();
  },
  get name() {
    return this._name;
  },
  age: 20,
};

anotherPersonData.name = "Max";
anotherPersonData.name;

//! OOP

//! Classes
//+ classes are blue prints of objects. Define how an object looks like and what properties and methods it have

class Product {
  name = "DefaulT name"; //+ we cn give a default value`
  price;
  url;

  constructor(name, price, url) {
    //+ we can use constructor to initialize the object
    this.name = name;
    this.price = price;
    this.url = url;
  }
  someMethod() {} //+ we can create functions like this
}

//+ creating an object
new Product();
const prod = new Product("pillow", 100, "url");

class Product {
  constructor(name, price, url) {
    //+ we ca do like this as well. without the fields, we can initialize  the properties. not need to mention the fields
    this.name = name;
    this.price = price;
    this.url = url;
    this.totalOutput = cartEl.querySelector("h2");
  }
}

//! static fields and methods
//+ define with static keyword. can be accessible by class itself
class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

cartSum.toFixed(2); //+ can be used to floating number

//! Inheritance
class Product extends App {
  //+ we can add inheritance like this. only one inheritance supported
}
