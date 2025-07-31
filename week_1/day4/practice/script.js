// let vs const

// ✅ Both `let` and `const` are block scoped (NOT function scoped)

// ✅ `let` creates a mutable variable
let count = 1;
count = 2; // allowed

// ✅ `const` creates a constant (immutable) variable
const pi = 3.14;
pi = 3.14159; // ❌ Error: Assignment to constant variable

// ✅ const must be initialized at the time of declaration
const name; // ❌ Error: Missing initializer

//----------------------------------

// Arrow Functions (3 Types):

// 1. Fat arrow function with no parameters
let func = () => {
  console.log("No parameters");
};
func(); // Output: No parameters

// 2. Fat arrow function with one parameter (no need for parentheses)
let a = param => {
  console.log("Param is", param);
};
a(12); // Output: Param is 12

// 3. Fat arrow function with implicit return (no curly braces)
let b = () => 100;
console.log(b()); // Output: 100

//--------------------------------------
//TEMPLATE LITERALS
let boy = "Harsh";
let age = 22;

let intro = `My name is ${boy} and I am ${age} years old.`;
console.log(intro); // Output: My name is Harsh and I am 22 years old.

let message = `This is a multi-line string.
It spans across multiple lines.
No need to use \n manually!`;
console.log(message);
//---------------------------------------------
//Default parameters 
// we can assign default parameters in function definition.when we 
// dont give value for certain parameters in fuction call than default
// parameters are considered.

let ex = (a = 10, b = 20, c = 30) => {
  console.log(a, b, c);
};

ex(1, 2, 3); // Output: 1 2 3
ex(1, 2);    // Output: 1 2 30
ex(1);       // Output: 1 20 30
ex();        // Output: 10 20 30
//-----------------------------------------------------

//REST AND SPREAD
// ✅ Spread Operator(...)
// 📌 Purpose: Expands (spreads) elements of an iterable (like arrays or objects).

// 🔹 Example 1: Spread in Arrays

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// 🔹 Example 2: Spread in Objects

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }


// ✅ Rest Operator (...)
// 📌 Purpose: Collects multiple elements into a single array-like structure.

// 🔹 Example 1: Rest in Function Parameters

function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // output :10

// 🔹 Example 2: Rest in Destructuring

let [f, ...rest] = [10, 20, 30, 40];
console.log(f);    // 10
console.log(rest); // [20, 30, 40]