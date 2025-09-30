import React from "react";
import PatientList from "./components/PatientList.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Patient Records
      </h1>
      <PatientList />
    </div>
  );
}

export default App;
