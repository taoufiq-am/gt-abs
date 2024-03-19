// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// function UpdateAbsence() {
//   const { id } = useParams();
//   const [dateAbsence, setDateAbsence] = useState("");
//   const [jourAbsence, setJourAbsence] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch absence data corresponding to the id from the API
//     fetch(`http://localhost:8000/absences/${id}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch absence");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Set the form fields with the fetched absence data
//         setDateAbsence(data.date_absence);
//         setJourAbsence(data.jour_absence);
//       })
//       .catch((error) => {
//         console.error("Error fetching absence:", error);
//       });
//   }, [id]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const updatedAbsence = {
//       date_absence: dateAbsence,
//       jour_absence: jourAbsence,
//     };

//     // Make a PUT request to update the absence data
//     fetch(`http://localhost:8000/absences/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedAbsence),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to update absence");
//         }
//         // Redirect back to the absence list page after successful update
//         navigate("/absences");
//       })
//       .catch((error) => {
//         console.error("Error updating absence:", error);
//       });
//   };

//   return (
//     <div className="container">
//       <h2 className="my-4">Update Absence {id}</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="dateAbsence" className="form-label">
//             Date Absence
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="dateAbsence"
//             value={dateAbsence}
//             onChange={(e) => setDateAbsence(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="jourAbsence" className="form-label">
//             Jour Absence
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="jourAbsence"
//             value={jourAbsence}
//             onChange={(e) => setJourAbsence(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Update
//         </button>
//       </form>
//     </div>
//   );
// }

// export default UpdateAbsence;
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateAbsence() {
  const { id } = useParams();
  const [dateAbsence, setDateAbsence] = useState("");
  const [jourAbsence, setJourAbsence] = useState("");
  const [selectedStagiaireId, setSelectedStagiaireId] = useState("");
  const [stagiaires, setStagiaires] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch absence data corresponding to the id from the API
    fetch(`http://localhost:8000/absences/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch absence");
        }
        return response.json();
      })
      .then((data) => {
        // Set the form fields with the fetched absence data
        setDateAbsence(data.date_absence);
        setJourAbsence(data.jour_absence);
        setSelectedStagiaireId(data.id_stgr);
      })
      .catch((error) => {
        console.error("Error fetching absence:", error);
      });

    // Fetch list of stagiaires for dropdown menu
    fetch("http://localhost:8000/stagiaires")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch stagiaires");
        }
        return response.json();
      })
      .then((data) => {
        setStagiaires(data);
      })
      .catch((error) => {
        console.error("Error fetching stagiaires:", error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedAbsence = {
      date_absence: dateAbsence,
      jour_absence: jourAbsence,
      id_stgr: selectedStagiaireId,
    };

    // Make a PUT request to update the absence data
    fetch(`http://localhost:8000/absences/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedAbsence),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update absence");
        }
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating absence:", error);
      });
  };

  return (
    <div className="container">
      <h2 className="my-4">Update Absence {id}</h2>
      <form >
        <div className="mb-3">
          <label htmlFor="dateAbsence" className="form-label">
            Date Absence
          </label>
          <input
            type="text"
            className="form-control"
            id="dateAbsence"
            value={dateAbsence}
            onChange={(e) => setDateAbsence(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="jourAbsence" className="form-label">
            Jour Absence
          </label>
          <input
            type="text"
            className="form-control"
            id="jourAbsence"
            value={jourAbsence}
            onChange={(e) => setJourAbsence(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stagiaireId" className="form-label">
            Stagiaire ID
          </label>
          <select
            id="stagiaireId"
            className="form-control"
            value={selectedStagiaireId}
            onChange={(e) => setSelectedStagiaireId(e.target.value)}
          >
            {stagiaires.map((stagiaire) => (
              <option key={stagiaire.id} value={stagiaire.id}>
                {stagiaire.id}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateAbsence;
