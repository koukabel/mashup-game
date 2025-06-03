import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.scss";
import logo from "../../assets/mmlogo.png";
import close from "../../assets/close.png";
import open from "../../assets/menu.png";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check viewport size on mount and resize
  useEffect(() => {
    const checkViewport = () => {
      setIsMobileView(window.innerWidth < 768); // 768px is common breakpoint for tablets
    };

    // Initial check
    checkViewport();

    // Add event listener
    window.addEventListener("resize", checkViewport);

    // Cleanup
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo - always visible */}
          <NavLink to="/" className="logo-link" onClick={closeMenu}>
            <img src={logo} className="logo" alt="mmlogo" />
          </NavLink>

          {/* Mobile menu button - only shows on mobile */}
          {isMobileView && (
            <button
              onClick={toggleMenu}
              className="mobile-menu-button"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              <img
                src={isMobileMenuOpen ? close : open}
                alt={isMobileMenuOpen ? "Close menu" : "Open menu"}
                className="menu-icon"
              />
            </button>
          )}

          {/* Desktop menu - shows on larger screens */}
          {!isMobileView && (
            <ul className="desktop-menu">
              <li>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/rules">Rules</NavLink>
              </li>
              <li>
                <NavLink to="/leaderboard">Leaderboard</NavLink>
              </li>
            </ul>
          )}

          {/* Mobile menu - shows when toggled on mobile */}
          {isMobileView && isMobileMenuOpen && (
            <div className="mobile-menu-overlay">
              <ul className="mobile-menu">
                <li>
                  <NavLink to="/" end onClick={closeMenu}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/rules" onClick={closeMenu}>
                    Rules
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/leaderboard" onClick={closeMenu}>
                    Leaderboard
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
