import React from "react";

function MenuItems(props) {
  const customStyle = `flex group items-center ${props.style}`;
  return (
    <div className={customStyle}>
      <a href="/" className="pr-2">
        {props.text}
      </a>

      <div className="h-[3px] w-[16px] bg-[#8bcbb7] transform translate-x-full transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-x-0"></div>
    </div>
  );
}

export default MenuItems;
