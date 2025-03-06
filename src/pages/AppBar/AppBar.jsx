import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={css.navContainer}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home{" "}
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/contacts" className={buildLinkClass}>
              Contacts
            </NavLink>
            <h3 className={css.text}>{`Welcome, ${user.email}`} </h3>
            <button
              className={css.button}
              onClick={() => dispatch(logoutThunk())}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/register" className={buildLinkClass}>
              Register{" "}
            </NavLink>
            <NavLink to="/login" className={buildLinkClass}>
              Log In{" "}
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};
export default AppBar;
