const person = {
  firsName: "ginger",
  lastName: "richard",
  age: 20,

  double(age) {
    return (age *= 2);
  },
};
const funct = function variableParFunctOBJAlt(person) {
  if (
    typeof person.firsName == "string" &&
    typeof person.lastName == "string"
  ) {
    if (typeof person.double === "function") {
      person.age = person.double(person.age);
    }
    console.log(person);
  } else {
    return "Parametri non validi";
  }
};
console.log(funct(person));
