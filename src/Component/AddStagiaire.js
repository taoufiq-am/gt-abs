// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addUserAction } from "../Config/actions";
// import { useNavigate } from "react-router-dom";

// function AddUser() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleClick = () => {
//     // Create a new user object
//     const newUser = {
//       name: name,
//       email: email,
//     };

//     // Make a POST request to the API to add the new user
//     fetch("http://localhost:8000/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to add user");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Dispatch the addUserAction to update Redux store
//         dispatch(addUserAction(data));
//         // Reset input fields
//         setName("");
//         setEmail("");
//         // Navigate back to the user list page
//         navigate("/");
//       })
//       .catch((error) => {
//         console.error("Error adding user:", error);
//       });
//   };

//   return (
//     <form>
//       <label>Name</label>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <label>Email</label>
//       <input
//         type="text"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button type="button" onClick={handleClick}>
//         Enregistrer
//       </button>
//     </form>
//   );
// }

// export default AddUser;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStagiaireAction } from "../Config/actions"; // Assuming you have an action called addStagiaireAction
import { useNavigate } from "react-router-dom";

function AddStagiaire() {
  // const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filiere, setFiliere] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!name.trim() || !telephone.trim() || !filiere.trim()) {
      alert("Please fill in all fields.");
    }

    // Create a new stagiaire object
    const newStagiaire = {
      // id: id,
      name: name,
      telephone: telephone,
      filiere: filiere,
    };

    // Make a POST request to the API to add the new stagiaire
    fetch("http://localhost:8000/stagiaires", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStagiaire),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add stagiaire");
        }
        return response.json();
      })
      .then((data) => {
        // Dispatch the addStagiaireAction to update Redux store
        dispatch(addStagiaireAction(data));
        // Reset input fields
        // setId("");
        setName("");
        setTelephone("");
        setFiliere("");
        // Navigate back to the stagiaire list page
        navigate("/");
        alert("Stagiaire added successfully!");
      })
      .catch((error) => {
        console.error("Error adding stagiaire:", error);
        alert("Failed to add stagiaire. Please try again later.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="id">ID:</label>
      <input
        type="text"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      /> */}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="telephone">Téléphone:</label>
      <input
        type="text"
        id="telephone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
      />
      <label htmlFor="filiere">Filière:</label>
      <input
        type="text"
        id="filiere"
        value={filiere}
        onChange={(e) => setFiliere(e.target.value)}
      />
      <button type="submit">Enregistrer</button>
    </form>
  );
}

export default AddStagiaire;
