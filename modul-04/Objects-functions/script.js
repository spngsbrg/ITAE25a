const author = {
  firstName: "John",
  lastName: "Doe",
  hireDate: "2023-09-01",
  getName: function () {
    return this.firstName + " " + this.lastName;
  },
};

document.getElementById("main").innerHTML = author.getName();

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.introduction = function () {
    return (
      "Hello, my name is " +
      this.firstName +
      " " +
      this.lastName +
      " " +
      "and I am " +
      this.age +
      " years old"
    );
  };
}

const p1 = new Person("John", "Doe", 25);

document.getElementById("intro").innerHTML = p1.introduction();

let personsArray = [];
for (let i = 0; i < 5; i++) {
  const p = new Person("John", "Doe-" + i, 25 + i);
  personsArray.push(p);
}

console.log(personsArray);

document.getElementById("intro").innerHTML = personsArray[2].introduction();
