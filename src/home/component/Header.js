import React from "react";

function Header() {
  return (
    <div className="flex w-screen justify-center text-blue-950  bg-header-theme p-2 text-lg font-medium">
      <a href="/" className="hover:text-emerald-500">
        Retrouvons-nous du
        <span className="font-bold"> 17 juin au 9 septembre 2023</span>
      </a>
    </div>
  );
}

export default Header;
