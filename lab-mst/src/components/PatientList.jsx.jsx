import React, { useState } from "react";

function PatientList() {
  const [patients, setPatients] = useState([
    { id:1, name: "Vivan", disease: "Flu" },
    { id:2, name: "Sahil", disease: "Diabetes" },
    { id:3, name: "Ram", disease: "Asthma" },
  ]);

  const removePatient = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };
 
return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {patients.map((patient) => (
        <div
          key={patient.id}
          className="bg-white shadow-lg rounded-2xl p-4 border"
        >
          <h2 className="text-xl font-semibold">{patient.name}</h2>
          <p className="text-gray-600">Disease: {patient.disease}</p>
          <button
            onClick={() => removePatient(patient.id)}
            className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-610"
          >
            Remove
          </button>
        </div>
      ))}
      {patients.length === 0 && (
        <p className="col-span-full text-center text-gray-500">
          No patients left.
        </p>
      )}
    </div>
  );
}

export default PatientList;