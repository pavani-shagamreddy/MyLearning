import React from "react";
import { NavLink } from "react-router-dom";
function MyLearningOne() {
  return (
    <>
      <ul className="SideNav_menu">
        <li className="sideNav_item">
          <NavLink to="/frontend" className="sideNav_Link">
            TRACK-1 (FRONTEND)
          </NavLink>
        </li>
        <li className="sideNav_item">
          <NavLink to="/backend" className="sideNav_Link">
            TRACK-2 (BACKEND)
          </NavLink>
        </li>
        <li className="sideNav_item">
          <NavLink to="/database" className="sideNav_Link">
            TRACK-3 (DATABASE)
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default MyLearningOne;
