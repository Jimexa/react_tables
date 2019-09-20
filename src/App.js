import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TableScreen from "./components/tableScreen/TableScreen";

const data = [
  {
    firstName: "Dimitris",
    lastName: "Exadaktylos",
    adress: "Trapezountiou",
    jobTitle: "Front end developer"
  },
  {
    firstName: "Marianna",
    lastName: "Michala",
    adress: "Trapezountiou",
    jobTitle: "Arheologist"
  },
  {
    firstName: "Nikos",
    lastName: "Triantafyllou",
    adress: "Mets",
    jobTitle: "Marketeer"
  },
  {
    firstName: "Kostas",
    lastName: "Chobardas",
    adress: "New Xalkidona",
    jobTitle: "Psychiatrist"
  },
  {
    firstName: "Afroditi",
    lastName: "Kalogianni",
    adress: "New Xalkidona",
    jobTitle: "Veterinarian"
  }
];

function App() {
  return (
    <body>
      <div className="App">
        <p>Hello..!</p>
        {/* <div className="tableContainer"> */}
        <TableScreen data={data} />
        {/* </div> */}
      </div>
    </body>
  );
}

export default App;
