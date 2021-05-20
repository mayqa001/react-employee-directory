import Header from "./components/Header";
import Empolyees from "./components/Employees";
import Buttons from "./components/Buttons";

import { useEffect, useState } from "react";

function App() {
  const [empArray, updateArray] = useState([]);
  const bool = true;
  useEffect(() => {
    const getEmpoyee = async () => {
      const temp = await fetchEmployees();
      updateArray(temp);
    };
    getEmpoyee();
  }, [bool]);

  const sortByAge = () => {
    console.log("sortByAge");
    updateArray(empArray.sort((a, b) => a.dob.age - b.dob.age));
    console.log(empArray);
  };

  const sortByName = () => {
    console.log("sortByName");
    updateArray(empArray.sort());
    console.log(empArray);
  };

  // Fetch employ
  const fetchEmployees = async () => {
    const res = await fetch(`https://randomuser.me/api/?results=10&nat=us`);
    const data = await res.json();
    return data.results;
  };

  return (
    <div className="container">
      <Header />
      <Buttons list={empArray} sortByName={sortByName} sortByAge={sortByAge} />
      <Empolyees list={empArray} />
    </div>
  );
}

export default App;
