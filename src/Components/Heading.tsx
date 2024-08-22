import React from "react";
type HeadingProp = {
  children: React.ReactNode;
};
// type HeadingProp = {
//   children: string;
// };
const Heading = (props: HeadingProp) => {
  return <div>Headign {props.children}</div>;
};

export default Heading;
