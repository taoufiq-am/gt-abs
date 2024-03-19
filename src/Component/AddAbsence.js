import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAbsenceAction } from "../Config/actions";
import { useNavigate } from "react-router-dom";

function AddAbsence() {
  const [date_absence, setDateAbsence] = useState("");
  const [jour_absence, setJourAbsence] = useState("");
  const [selectedStagiaireId, setSelectedStagiaireId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Assuming you have a Redux state for stagiaires
  const stagiaires = useSelector((state) => state.stagiaires);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !date_absence.trim() ||
      !jour_absence.trim() ||
      !selectedStagiaireId.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new absence object
    const newAbsence = {
      id_stgr: selectedStagiaireId,
      date_absence: date_absence,
      jour_absence: jour_absence,
    };

    // Make a POST request to the API to add the new absence
    fetch("http://localhost:8000/absences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAbsence),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add absence");
        }
        return response.json();
      })
      .then((data) => {
        // Dispatch the addAbsenceAction to update Redux store
        dispatch(addAbsenceAction(data));
        // Reset input fields
        setDateAbsence("");
        setJourAbsence("");
        setSelectedStagiaireId("");
        // Navigate back to the absence list page
        navigate("/absence-list");
        alert("Absence added successfully!");
      })
      .catch((error) => {
        console.error("Error adding absence:", error);
        alert("Failed to add absence. Please try again later.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Select Stagiaire ID</label>
      <select
        value={selectedStagiaireId}
        onChange={(e) => setSelectedStagiaireId(e.target.value)}
      >
        <option value="">Select Stagiaire ID</option>
        {stagiaires.map((stagiaire) => (
          <option key={stagiaire.id} value={stagiaire.id}>
            {stagiaire.id}
          </option>
        ))}
      </select>
      <label htmlFor="date_absence">Date Absence:</label>
      <input
        type="text"
        id="date_absence"
        value={date_absence}
        onChange={(e) => setDateAbsence(e.target.value)}
      />
      <label htmlFor="jour_absence">Jour Absence:</label>
      <input
        type="text"
        id="jour_absence"
        value={jour_absence}
        onChange={(e) => setJourAbsence(e.target.value)}
      />
      <button type="submit">Enregistrer</button>
    </form>
  );
}

export default AddAbsence;
