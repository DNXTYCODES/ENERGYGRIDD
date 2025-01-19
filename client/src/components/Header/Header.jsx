import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import useAuthCheck from "../../hooks/useAuthCheck.jsx";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  // Check if the logged-in user is an admin (for admin link visibility)
  const adminEmails = ["ayomatthew891@gmail.com", "admin2@example.com"];
  const isAdmin = isAuthenticated && user && adminEmails.includes(user.email);

  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        {/* Logo */}
        <Link to="/">
          <img src="./EnergyGrid  black .png" alt="logo" width={100} />
        </Link>

        {/* Menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/publications">Publications</NavLink>
            {/* <span>Services</span> */}
            {/* <a href="mailto:ayomatthew891@gmail.com">Contact</a> */}
            <NavLink to="/people">People</NavLink>
            <NavLink to="/about">About</NavLink>

            <NavLink to="/expertise">expertise</NavLink>

            <NavLink to="/uploadauthor" className="admin-link">
              upload author
            </NavLink>

            <NavLink to="/uploadpublication" className="admin-link">
              upload publication
            </NavLink>

            {/* Admin Link */}
            {isAdmin && (
              <NavLink to="/admin" className="admin-link">
                Admin
              </NavLink>
            )}

            {/* Login/Logout Button */}
            {/* {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )} */}
          </div>
        </OutsideClickHandler>

        {/* Menu Icon for Small Screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
