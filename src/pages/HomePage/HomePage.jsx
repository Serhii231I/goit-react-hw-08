import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "../HomePage/HomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const HomePage = () => {
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
              Tasks
            </NavLink>
            <h3>{`Welcome, ${user.email}`} </h3>
            <button onClick={() => dispatch(logoutThunk())}>Logout</button>
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
export default HomePage;
