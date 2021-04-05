import { useState } from "react";
import { useLocation } from "react-router";
import useOnclickOutside from "react-cool-onclickoutside";
import { useProfileQuery } from "../../graphql/generated/graphql";
import { IconTypes } from "../../utils/types";
import Icon from "../icons";

const Menu = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const currentPath = useLocation().pathname;
  const { data } = useProfileQuery();
  const viewerData = data?.viewer;

  const dropdownRef = useOnclickOutside(() => {
    setDisplayMenu(false);
  });

  const handleMenu = () => {
    setDisplayMenu((s) => !s);
  };

  const renderUserInfo = (info: string, icon: IconTypes) => {
    if (info) {
      return (
        <div className="flex items-center mb-4">
          <span className="mr-4">
            <Icon iconType={icon} styles="w-6 h-6 text-purple-500" />
          </span>
          <p className="text-gray-500 font-thin">{info}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <nav className="py-4 px-4 sm:px-8 bg-purple-200 flex items-center shadow-sm relative">
      <h1 className="flex items-center text-white text-purple-600 mr-auto">
        Code Overview
        <span>
          <Icon iconType={IconTypes.LOGO} styles="text-purple-600 ml-2" />
        </span>
      </h1>

      {/**Show profile info only in /profile route */}
      {currentPath === "/profile" && (
        <button
          className="border-0 border-transparent bg-transparent ignore-onclickoutside"
          onClick={handleMenu}
        >
          <img
            src={viewerData?.avatarUrl}
            alt="Viewer avatar"
            className="w-8 h-8 rounded-sm"
          />
        </button>
      )}

      {displayMenu && (
        <div
          className="bg-white p-3 absolute right-0 w-screen border-b-2 border-purple-300 sm:w-auto sm:right-2 shadow-sm sm:border-2 sm:border-purple-200 sm:rounded-md"
          style={{ top: "68px" }}
          ref={dropdownRef}
        >
          <h2 className="mb-4">{viewerData?.name}</h2>
          {renderUserInfo(viewerData?.bio!, IconTypes.BIO)}
          {renderUserInfo(viewerData?.company!, IconTypes.ORGANISATION)}
          {renderUserInfo(viewerData?.location!, IconTypes.LOCATION)}
        </div>
      )}
    </nav>
  );
};

export default Menu;
