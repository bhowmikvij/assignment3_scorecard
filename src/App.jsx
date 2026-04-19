import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Riya", score: 45 },
    { id: 3, name: "Karan", score: 90 },
    { id: 4, name: "Neha", score: 68 },
  ]);

  const updateScore = (id, newScore) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, score: Number(newScore) } : s
      )
    );
  };

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  // stats
  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const avg =
    total === 0
      ? 0
      : Math.floor(
          students.reduce((acc, s) => acc + s.score, 0) / total
        );

  return (
    <div className="container">
      <Header />

      <h3 className="section-title">Add Student</h3>
      <AddStudentForm addStudent={addStudent} />

      {/* Stats */}
      <h3 className="section-title">Statistics</h3>
      <div className="stats">
        <div className="card">
          <p>Total</p>
          <h2>{total}</h2>
        </div>

        <div className="card">
          <p>Passed</p>
          <h2>{passed}</h2>
        </div>

        <div className="card">
          <p>Average</p>
          <h2>{avg}</h2>
        </div>
      </div>

      <StudentTable
        students={students}
        updateScore={updateScore}
      />
    </div>
  );
}

export default App;