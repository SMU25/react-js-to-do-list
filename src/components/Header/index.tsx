import React, { FC } from "react";

const HEADING = "To do list";

const Header: FC = () => {
  return (
    <h1 className="flex justify-center w-full bg-gray-900 py-10 text-slate-200 text-7xl capitalize shadow-lg shadow-slate-300">
      {HEADING}
    </h1>
  );
};

export default Header;
