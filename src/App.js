// import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import StagiaireList from "./Component/StagiaireList";
// import AddStagiaire from "./Component/AddStagiaire";
// import UpdateStagiaire from "./Component/UpdateStagiaire";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//           <div className="container">
//             <Link className="navbar-brand" to="/">
//               Gestion des Stagiaires
//             </Link>
//           </div>
//         </nav>

//         <div className="container mt-4">
//           <Routes>
//             <Route path="/" element={<StagiaireList />} />
//             <Route path="/add-stagiaire" element={<AddStagiaire />} />
//             <Route path="/update-stagiaire/:id" element={<UpdateStagiaire />} />
//             />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StagiaireList from "./Component/StagiaireList";
import AddStagiaire from "./Component/AddStagiaire";
import UpdateStagiaire from "./Component/UpdateStagiaire";
import AbsenceList from "./Component/AbsenceList"; // Import AbsenceList component
import AddAbsence from "./Component/AddAbsence"; // Import AddAbsence component
import UpdateAbsence from "./Component/UpdateAbsence"; // Import UpdateAbsence component
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Gestion des Stagiaires
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/absence-list">
                    Gestion des Absences
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<StagiaireList />} />
            <Route path="/add-stagiaire" element={<AddStagiaire />} />
            <Route path="/update-stagiaire/:id" element={<UpdateStagiaire />} />
            <Route path="/absence-list" element={<AbsenceList />} />
            <Route path="/add-absence" element={<AddAbsence />} />
            <Route path="/add-absence" element={<AddAbsence />} />
            <Route path="/update-absence/:id" element={<UpdateAbsence />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
