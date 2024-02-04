import React from "react";
import Button from "./Button";
const Header = ({heading,onClick,showSignOutButton,token}) => {
  return (
    <>
      <div className="w-screen bg-gray-400 py-2 flex justify-between content-center	capitalize tracking-wide px-2">
        <h3 className="text-2xl font-sans">{heading}</h3>
{token && <button type="submit" onClick={onClick} className="bg-yellow-400 mr-7 p-2 rounded-md text-black font-medium">Sign out</button>
}      </div>
    </>
  );
};

export default Header;
