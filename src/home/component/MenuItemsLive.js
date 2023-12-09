import React from "react";

function MenuItemsLive(props) {
  return (
    <div className="flex group items-center border-solid border-2 border-sky-500 w-fit px-2">
      <a href="/" className="pr-2">
        {props.text}
      </a>
      <div className="bg-[#e73b2b] rounded-full w-3 h-3"></div>
    </div>
  );
}

export default MenuItemsLive;
