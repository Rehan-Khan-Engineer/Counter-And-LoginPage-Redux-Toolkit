import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { authActions } from "../store/auth";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.isLoggedIn());
  };

  const headerNav = (
    <nav>
      <ul>
        <li>
          <a href="#">My Products</a>
        </li>
        <li>
          <a href="#">My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLoggedIn && headerNav}
    </header>
  );
};

export default Header;
