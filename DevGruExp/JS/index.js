function printFact(x) {
  let fact = 1;
  for (let i = x; i > 0; i--) {
    fact *= i;
  }
  console.log("The factorial of the number selected is: ", fact);
}
printFact(5);

function printDiv(x) {
  const divisor = [];
  for (let i = 1; i <= x; i++) {
    if (x % i == 0) {
      divisor.push(i);
    }
  }
  console.log("The divisors of the number selected is: ", divisor);
  console.log(divisor.length == 2 ? x + " is Prime" : x + " is not Prime");
}
printDiv(1111);

let x = 5;

function f(x) {
  x = x + 1;
  console.log(x);
}
f(2);
console.log(x);

function even(x) {
  for (let index = 0; index < 100; index++) {
    if (index % 2 !== 0) {
      continue;
    }
    console.log(index);
  }
}

for (let index = 0; index < 100; index++) {
  if (index % 2 !== 0) {
    continue;
  } else if (index == 50) {
    break;
  }
  console.log(index);
}

function switchFunct(x) {
  switch (true) {
    case x < 10:
      console.log("prova");
      break;
    case x == 800:
      console.log("prova2");
      break;
    default:
      console.log("test");
      break;
  }
}
switchFunct(800);

function switchFunctGreeting(greeting) {
  switch (true) {
    case greeting < 13:
      console.log("good morning");
      break;
    case greeting < 18:
      console.log("good afternoon");
      break;
    default:
      console.log("good evening");
      break;
  }
}
switchFunctGreeting(19);

function product(x, y) {
  return x * y;
}

console.log(typeof product);

function variableParFunct(x, y, prod) {
  let tmp = "Parametri non validi";
  if (typeof x == "number" && typeof y == "number") {
    if (typeof prod == "function") {
      tmp = product(x, y);
    } else {
      tmp = x ** y;
    }
  }
  return tmp;
}
console.log(variableParFunct(2, 3, product));
console.log(variableParFunct(2, 3));

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

function variableParFunctOBJ(firstName, lastName) {
  if (typeof firstName == "string" && typeof lastName == "string") {
    const person = new Person(firstName, lastName, 50);
    person.age = person.age ** 2;
    return person;
  } else {
    return "Parametri non validi";
  }
}
console.log(variableParFunctOBJ("john", "doe"));
