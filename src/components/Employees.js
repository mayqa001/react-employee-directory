import Employee from "./Empolyee";

const empolyees = ({ list }) => {
 let index = 0;
 const increase = () =>{
    return index++;
 }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
        {list.map((employee) => (
          <Employee key = {increase()}
            fisrtname={employee.name.first}
            lastname={employee.name.last}
            age={employee.dob.age}
            rowNumber = {index}
          />
        ))}
      </tbody>
    </table>
  );
};

export default empolyees;
