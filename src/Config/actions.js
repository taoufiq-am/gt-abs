// export const addUserAction = (user) => {
//   return {
//     type: "Add_user",
//     payload: user,
//   };
// };
// export const updateUserAction = (newuser) => {
//   return {
//     type: "Update_user",
//     payload: newuser,
//   };
// };
// export const deleteUserAction = (id) => {
//   return {
//     type: "Delete_user",
//     payload: id,
//   };
// };

export const addStagiaireAction = (stagiaire) => {
  return {
    type: "Add_stagiaire",
    payload: stagiaire,
  };
};

export const updateStagiaireAction = (newStagiaire) => {
  return {
    type: "Update_stagiaire",
    payload: newStagiaire,
  };
};

export const deleteStagiaireAction = (id) => {
  return {
    type: "Delete_stagiaire",
    payload: id,
  };
};

// actions/absenceActions.js
export const addAbsenceAction = (absence) => {
  return {
    type: "Add_absence",
    payload: absence,
  };
};

export const updateAbsenceAction = (newAbsence) => {
  return {
    type: "Update_absence",
    payload: newAbsence,
  };
};

export const deleteAbsenceAction = (id) => {
  return {
    type: "Delete_absence",
    payload: id,
  };
};

// export const fetchAbsences = () => {
//   return fetch("http://localhost:8000/absences")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to fetch absences");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       return data.absences; // Assuming the response has a property 'absences' containing the list of absences
//     })
//     .catch((error) => {
//       console.error("Error fetching absences:", error);
//       throw error; // Rethrow the error to handle it in the component or action caller
//     });
// };