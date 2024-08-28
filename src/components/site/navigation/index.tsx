import { User } from "@clerk/nextjs/server";
import React from "react";

type Props = {
  user?: null | User;
};

const Navigation = ({ user }: Props) => {
  return <div className="">Navigation</div>;
};

export default Navigation;
