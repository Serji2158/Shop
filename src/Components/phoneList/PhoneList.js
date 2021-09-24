import React from "react";
// import data from "../../data";
import PhoneListItem from "./phoneListItem/PhoneListItem";

const PhoneList = ({ phones }) => {
  return (
    <ul>
      {phones.map((phone) => (
        <PhoneListItem phone={phone} key={phone.id} />
      ))}
    </ul>
  );
};

export default PhoneList;

// const PhoneList = () => {
//   return (
//     <ul>
//       {data.phones.map((phone) => (
//         <li key={phone.id}>
//           <h2>{phone.name}</h2>
//           <img src={phone.image} alt={phone.name} />
//           <p>{phone.discription}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };
