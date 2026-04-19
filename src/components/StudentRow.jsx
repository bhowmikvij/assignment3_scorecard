import { useState } from "react";

function StudentRow({ student, updateScore }) {
  const [newScore, setNewScore] = useState(student.score);

  const isPass = student.score >= 40;

  const handleSave = () => {
    if (newScore === "") return;
    updateScore(student.id, newScore);
  };

  return (
    <tr>
      <td>{student.name}</td>

      <td>{student.score}</td>

      <td>
        <span className={isPass ? "badge pass" : "badge fail"}>
          {isPass ? "Pass" : "Fail"}
        </span>
      </td>

      <td>
        <input
          type="number"
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
        />

        <button
            className="save-btn"
            onClick={handleSave}
            disabled={newScore == student.score}
        >
            Save
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;