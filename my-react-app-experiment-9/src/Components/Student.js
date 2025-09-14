import { Person } from "./Person.js";

export class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  displayInfo() {
    return `${super.displayInfo()}, Grade: ${this.grade}`;
  }
}
