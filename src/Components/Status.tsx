import React from "react";

//here it can be any string be it assasa,ok,pending etc...k
// type statusProp = {
//   status: string;
// };
type statusProp = {
  status: "pending" | "fail" | "success";
};
const Status = ({ status }: statusProp) => {
  return <div>Status.{status}</div>;
};
// const Status = (prop: statusProp) => {
//   return <div>Status.{prop.status}</div>;
// };

export default Status;
