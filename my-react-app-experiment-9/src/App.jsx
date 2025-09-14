import React from "react";
import { Student } from "./Components/Student";
import { Teacher } from "./Components/Teacher";

function App() {
  const student = new Student("Alice", 20, "A");
  const teacher = new Teacher("Mr. Bob", 40, "Mathematics");

  return (
    <div>
      <h1>Class Hierarchy Example</h1>
      <p>{student.displayInfo()}</p>
      <p>{teacher.displayInfo()}</p>
    </div>
  );
}

export default App;
