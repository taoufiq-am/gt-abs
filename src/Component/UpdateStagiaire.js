// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function UpdateUser() {
//   const { id } = useParams();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate(); // Import useNavigate

//   useEffect(() => {
//     // Fetch user data corresponding to the id from the API
//     fetch(`http://localhost:8000/users/${id}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch user");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Set the form fields with the fetched user data
//         setName(data.name);
//         setEmail(data.email);
//       })
//       .catch((error) => {
//         console.error("Error fetching user:", error);
//       });
//   }, [id]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const updatedUser = {
//       name: name,
//       email: email,
//     };

//     // Make a PUT request to update the user data
//     fetch(`http://localhost:8000/users/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedUser),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to update user");
//         }
//         // Redirect back to the user list page after successful update
//         navigate("/"); // Use navigate to redirect
//       })
//       .catch((error) => {
//         console.error("Error updating user:", error);
//       });
//   };

//   return (
//     <div>
//       <h2>Update User {id}</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <label>Email</label>
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// }

// export default UpdateUser;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateStagiaire() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filiere, setFiliere] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/stagiaires/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch stagiaire");
        }
        return response.json();
      })
      .then((data) => {
        setName(data.name);
        setTelephone(data.telephone);
        setFiliere(data.filiere);
      })
      .catch((error) => {
        console.error("Error fetching stagiaire:", error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedStagiaire = {
      name: name,
      telephone: telephone,
      filiere: filiere,
    };

    fetch(`http://localhost:8000/stagiaires/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStagiaire),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update stagiaire");
        }
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating stagiaire:", error);
      });
  };

  return (
    <div className="container">
      <h2 className="my-4">Update Stagiaire {id}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telephone" className="form-label">
            Téléphone
          </label>
          <input
            type="text"
            className="form-control"
            id="telephone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="filiere" className="form-label">
            Filière
          </label>
          <input
            type="text"
            className="form-control"
            id="filiere"
            value={filiere}
            onChange={(e) => setFiliere(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateStagiaire;
