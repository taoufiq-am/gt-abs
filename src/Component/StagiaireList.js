// // // import React, { useEffect, useState } from "react";
// // // import { Link } from "react-router-dom";

// // // function UserList() {
// // //   const [users, setUsers] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     setLoading(true);
// // //     fetch("http://localhost:8000/users")
// // //       .then((response) => {
// // //         if (!response.ok) {
// // //           throw new Error("Failed to fetch users");
// // //         }
// // //         return response.json();
// // //       })
// // //       .then((data) => {
// // //         setUsers(data);
// // //         setLoading(false);
// // //       })
// // //       .catch((error) => {
// // //         setError(error.message);
// // //         setLoading(false);
// // //       });
// // //   }, []);

// // //   const handleDelete = (id) => {
// // //     // Perform delete action here
// // //     // For example:
// // //     fetch(`http://localhost:8000/users/${id}`, {
// // //       method: "DELETE",
// // //     })
// // //       .then(() => {
// // //         setUsers(users.filter((user) => user.id !== id));
// // //       })
// // //       .catch((error) => {
// // //         setError(error.message);
// // //       });
// // //   };

// // //   if (loading) {
// // //     return <div className="text-center">Loading...</div>;
// // //   }

// // //   if (error) {
// // //     return <div className="text-center text-danger">Error: {error}</div>;
// // //   }

// // //   return (
// // //     <div className="container mt-4">
// // //       <h2 className="mb-4">User List</h2>
// // //       <table className="table">
// // //         <thead className="thead-dark">
// // //           <tr>
// // //             <th>ID</th>
// // //             <th>Name</th>
// // //             <th>Email</th>
// // //             <th>Actions</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {users.map((user) => (
// // //             <tr key={user.id}>
// // //               <td>{user.id}</td>
// // //               <td>{user.name}</td>
// // //               <td>{user.email}</td>
// // //               <td>
// // //                 <button
// // //                   className="btn btn-danger mr-2"
// // //                   onClick={() => handleDelete(user.id)}
// // //                 >
// // //                   Delete
// // //                 </button>
// // //                 <Link
// // //                   to={`/update-user/${user.id}`}
// // //                   className="btn btn-primary"
// // //                 >
// // //                   Edit
// // //                 </Link>
// // //               </td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // }

// // // export default UserList;

// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";

// // function StagiaireList() {
// //   const [stagiaires, setStagiaires] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [searchName, setSearchName] = useState("");
// //   const [searchId, setSearchId] = useState("");

// //   useEffect(() => {
// //     setLoading(true);
// //     fetch("http://localhost:8000/stagiaires")
// //       .then((response) => {
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch stagiaires");
// //         }
// //         return response.json();
// //       })
// //       .then((data) => {
// //         setStagiaires(data);
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         setError(error.message);
// //         setLoading(false);
// //       });
// //   }, []);

// //   const handleDelete = (id) => {
// //     fetch(`http://localhost:8000/stagiaires/${id}`, {
// //       method: "DELETE",
// //     })
// //       .then(() => {
// //         setStagiaires(stagiaires.filter((stagiaire) => stagiaire.id !== id));
// //       })
// //       .catch((error) => {
// //         setError(error.message);
// //       });
// //   };

// //   const filteredStagiaires = stagiaires.filter((stagiaire) => {
// //     return (
// //       stagiaire.name.toLowerCase().includes(searchName.toLowerCase()) &&
// //       stagiaire.id.toString().includes(searchId.toString())
// //     );
// //   });

// //   if (loading) {
// //     return <div className="text-center">Loading...</div>;
// //   }

// //   if (error) {
// //     return <div className="text-center text-danger">Error: {error}</div>;
// //   }

// //   return (
// //     <div className="container mt-4">
// //       <h2 className="mb-4">Stagiaire List</h2>
// //       <div className="row mb-3">
// //         <div className="col-md-6">
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder="Search by Name"
// //             value={searchName}
// //             onChange={(e) => setSearchName(e.target.value)}
// //           />
// //         </div>
// //         <div className="col-md-6">
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder="Search by ID"
// //             value={searchId}
// //             onChange={(e) => setSearchId(e.target.value)}
// //           />
// //         </div>
// //       </div>
// //       <table className="table">
// //         <thead className="thead-dark">
// //           <tr>
// //             <th>ID</th>
// //             <th>Name</th>
// //             <th>Telephone</th>
// //             <th>Filiere</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {filteredStagiaires.map((stagiaire) => (
// //             <tr key={stagiaire.id}>
// //               <td>{stagiaire.id}</td>
// //               <td>{stagiaire.name}</td>
// //               <td>{stagiaire.telephone}</td>
// //               <td>{stagiaire.féllier}</td>
// //               <td>
// //                 <button
// //                   className="btn btn-danger mr-2"
// //                   onClick={() => handleDelete(stagiaire.id)}
// //                 >
// //                   Delete
// //                 </button>
// //                 <Link
// //                   to={`/update-stagiaire/${stagiaire.id}`}
// //                   className="btn btn-primary"
// //                 >
// //                   Edit
// //                 </Link>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default StagiaireList;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function StagiaireList() {
//   const [stagiaires, setStagiaires] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchType, setSearchType] = useState("name"); // Default to search by name

//   useEffect(() => {
//     setLoading(true);
//     fetch("http://localhost:8000/stagiaires")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch stagiaires");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setStagiaires(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     fetch(`http://localhost:8000/stagiaires/${id}`, {
//       method: "DELETE",
//     })
//       .then(() => {
//         setStagiaires(stagiaires.filter((stagiaire) => stagiaire.id !== id));
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   };

//   const filteredStagiaires = stagiaires.filter((stagiaire) => {
//     if (searchType === "id") {
//       return stagiaire.id.toString().includes(searchTerm);
//     } else {
//       return stagiaire.name.toLowerCase().includes(searchTerm.toLowerCase());
//     }
//   });

//   if (loading) {
//     return <div className="text-center">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-danger">Error: {error}</div>;
//   }

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Stagiaire List</h2>
//       <div className="row mb-3">
//         <div className="col-md-4">
//           <div className="input-group">
//             <div className="input-group-prepend">
//               <button
//                 className="btn btn-outline-secondary dropdown-toggle"
//                 type="button"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 {searchType === "name" ? "Filter by Name" : "Filter by ID"}
//               </button>
//               <div className="dropdown-menu">
//                 <button
//                   className="dropdown-item"
//                   onClick={() => setSearchType("name")}
//                 >
//                   Name
//                 </button>
//                 <button
//                   className="dropdown-item"
//                   onClick={() => setSearchType("id")}
//                 >
//                   ID
//                 </button>
//               </div>
//             </div>
//             <input
//               type="text"
//               className="form-control"
//               placeholder={`Search by ${searchType === "name" ? "Name" : "ID"}`}
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>
//       </div>
//       <table className="table">
//         <thead className="thead-dark">
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Telephone</th>
//             <th>Filiere</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredStagiaires.map((stagiaire) => (
//             <tr key={stagiaire.id}>
//               <td>{stagiaire.id}</td>
//               <td>{stagiaire.name}</td>
//               <td>{stagiaire.telephone}</td>
//               <td>{stagiaire.féllier}</td>
//               <td>
//                 <button
//                   className="btn btn-danger mr-2"
//                   onClick={() => handleDelete(stagiaire.id)}
//                 >
//                   Delete
//                 </button>
//                 <Link
//                   to={`/update-stagiaire/${stagiaire.id}`}
//                   className="btn btn-primary"
//                 >
//                   Edit
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default StagiaireList;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function StagiaireList() {
  const [stagiaires, setStagiaires] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("id"); // Default to search by ID

  useEffect(() => {
    // setLoading(true);
    fetch("http://localhost:8000/stagiaires")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch stagiaires");
        }
        return response.json();
      })
      .then((data) => {
        setStagiaires(data);
        // setLoading(false);
      })
      .catch((error) => {
        // setError(error.message);
        // setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/stagiaires/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setStagiaires(stagiaires.filter((stagiaire) => stagiaire.id !== id));
      })
      .catch((error) => {
        // setError(error.message);
      });
  };

  const filteredStagiaires = stagiaires.filter((stagiaire) => {
    if (searchType === "id") {
      return stagiaire.id.toString().includes(searchTerm);
    } else {
      return stagiaire.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Stagiaire List</h2>
      <div className="row mb-3">
        <div className="col-md-4">
          <div className="input-group">
            <div className="input-group-prepend">
              <select
                className="form-control"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
              >
                <option value="id">Search by ID</option>
                <option value="name">Search by Name</option>
              </select>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder={`Enter ${
                searchType === "id" ? "ID" : "Name"
              } to search`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Telephone</th>
              <th>Filiere</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStagiaires.map((stagiaire) => (
              <tr key={stagiaire.id}>
                <td>{stagiaire.id}</td>
                <td>{stagiaire.name}</td>
                <td>{stagiaire.telephone}</td>
                <td>{stagiaire.filiere}</td>
                <td>
                  <button
                    className="btn btn-danger mr-2"
                    onClick={() => handleDelete(stagiaire.id)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/update-stagiaire/${stagiaire.id}`}
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
    </div>
  );
}

export default StagiaireList;
