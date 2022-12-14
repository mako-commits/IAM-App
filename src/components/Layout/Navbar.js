import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import AuthContext from "../../store/auth-context";
import Hamburger from "../../icons/Hamburger";
import CloseMenu from "../../icons/CloseMenu";
import Logout from "../Actions/Logout";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <nav className={classes.navbar}>
      <Link to="/" onClick={closeMenu}>
        <div className={classes.logo}>IAM App</div>
      </Link>
      <div onClick={handleClick} className={classes["nav-icon"]}>
        {open ? <CloseMenu /> : <Hamburger />}
      </div>

      <ul
        className={
          open
            ? `${classes.navLinks} ${classes.active}`
            : ` ${classes.navLinks}`
        }
      >
        <li className={classes.navItem}>
          <Link to="/public" className={classes.navLink} onClick={closeMenu}>
            Public Access
          </Link>
        </li>
        {!isLoggedIn && (
          <li className={classes.navItem}>
            <Link to="/auth" className={classes.navLink} onClick={closeMenu}>
              <button>Login</button>
            </Link>
          </li>
        )}

        {isLoggedIn && (
          <li className={classes.navItem}>
            <Link to="/profile" className={classes.navLink} onClick={closeMenu}>
              Profile
            </Link>
          </li>
        )}

        {isLoggedIn && (
          <li className={classes.navItem} onClick={closeMenu}>
            <Logout />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
