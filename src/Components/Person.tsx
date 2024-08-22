import React from "react";
import { Name } from "./Person.Type";

type personProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};
type personArrayProp = {
  personNameArray: Name[];
};
// type personArrayProp = {
//   personNameArray: { firstName: string; lastName: string }[];
// };
const Person = (props: personArrayProp) => {
  return (
    <div>
      {props?.personNameArray?.map((val, idx) => {
        return (
          <>
            {val.firstName} + {val.lastName}
          </>
        );
      })}
    </div>
  );
};
// const Person = (props: personProps) => {
//   return (
//     <div>
//       Person:{props.name.firstName} {props.name.lastName}
//     </div>
//   );
// };

export default Person;
