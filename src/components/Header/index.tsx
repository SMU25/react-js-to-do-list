import React, { FC } from "react";

const TITLE = "to-do-list";

const Header: FC = () => {
  return (
    <h1 className="flex justify-center w-full bg-slate-800 py-10 text-slate-200 text-7xl capitalize rounded-b-2xl shadow-lg shadow-slate-800">
      {TITLE}
    </h1>
  );
};

export default Header;
