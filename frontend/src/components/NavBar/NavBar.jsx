import { Outlet, NavLink } from "react-router-dom";
import "./NavBar.scss";
import logo from "../../assets/mmlogo.png";

function NavBar() {
  return (
    <>
      <nav>
        <img src={logo} className="logo" alt="mmlogo" />
        <ul>
          <li>
            <NavLink
              to={{
                pathname: "/",
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: "/rules",
              }}
            >
              Rules{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: "/leaderboard",
              }}
            >
              Leaderboard{" "}
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
