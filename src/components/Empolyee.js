import React from "react";

const empolyee = ({ rowNumber,fisrtname, lastname, age }) => {
  return (
    <tr>
      <th scope="row">{rowNumber}</th>
      <td>{fisrtname}</td>
      <td>{lastname}</td>
      <td>{age}</td>
    </tr>
  );
};

export default empolyee;
