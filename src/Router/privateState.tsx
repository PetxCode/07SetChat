import React, { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateState: FC<PropsWithChildren> = ({ children }) => {
  const mainUser = useSelector((state: any) => state.user);
  console.log(mainUser);

  return (
    <div>{mainUser ? <div>{children}</div> : <Navigate to="/login" />}</div>
  );
};

export default PrivateState;
