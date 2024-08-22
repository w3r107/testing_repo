import React, { useEffect, useState } from "react";

type GreetProps = {
  propOne: string;
  messageCount: number;
};

const Greet = (props: GreetProps) => {
  useEffect(() => {
    setSample({ propOne: "S", messageCount: 12 });
  }, []);
  const [sample, setSample] = useState<GreetProps | null>(null);
  return (
    <div>
      Greet {props.propOne},{sample?.propOne} ," ",no. of unread messages:
      {props.messageCount}
    </div>
  );
};
// const Greet = (props: GreetProps) => {
//   return (
//     <div>
//       Greet {props.propOne},no. of unread messages:{props.messageCount}
//     </div>
//   );
// };

export default Greet;
