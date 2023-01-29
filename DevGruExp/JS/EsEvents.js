let el = document.getElementById("primo");
let container = document.getElementById("container");
let b2 = document.getElementById("second");
let b3 = document.getElementById("third");
let baseline = container.style.width;
if (el) {
  el.addEventListener("click", function () {
    if (container) {
      container.style.width = container.offsetWidth + 100 + "px";
      console.log("x");
    }
  });
}
if (b2) {
  b2.addEventListener("click", function () {
    if (container) {
      container.style.height = container.offsetHeight + 100 + "px";
      console.log("x");
    }
  });
}
if (b3) {
  b3.addEventListener("click", function () {
    if (container) {
      console.log("x");
      container.style.width = "300px";
      container.style.height = "300px";
    }
  });
}
const people = [
  { name: "john", age: 45, id: 24, course: "Js" },
  { name: "sigma", age: 65, id: 25, course: "HTML" },
  { name: "olga", age: 76, id: 27, course: "CSS" },
  { name: "yuri", age: 76, id: 29, course: "Java" },
];
console.log(
  people.find(function (item) {
    console.log(item.age);
    return item.age >= 45 && item.id % 2 !== 0;
  })
);
console.log(
  people.filter(function (item) {
    const frontEnd = ["Js", "CSS", "HTML"];
    let search = frontEnd.includes(item.course);
    return item.age >= 45 && item.id % 2 !== 0 && search;
  })
);
