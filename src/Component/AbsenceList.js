import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AbsenceList() {
  const [absences, setAbsences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/absences")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch absences");
        }
        return response.json();
      })
      .then((data) => {
        setAbsences(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/absences/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setAbsences(absences.filter((absence) => absence.id !== id));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">Error: {error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Absence List</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Reason</th>
            <th>Stagiaire ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {absences.map((absence) => (
            <tr key={absence.id}>
              <td>{absence.id_stgr}</td>
              <td>{absence.nom_stgr}</td>
              <td>{absence.date_absence}</td>
              <td>{absence.jour_absence}</td>
              <td>
                <button
                  className="btn btn-danger mr-2"
                  onClick={() => handleDelete(absence.id)}
                >
                  Delete
                </button>
                <Link
                  to={`/update-absence/${absence.id}`}
                  className="btn btn-primary"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AbsenceList;
