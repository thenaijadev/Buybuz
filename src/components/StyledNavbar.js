import { NavLink, Link } from "react-router-dom";
import Classes from "./StyledNavbar.module.css";
import SearchBar from "./SearchBar/SearchBar";
import Button from "./Button/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledNavbar = () => {
  return (
    <nav className={Classes.Navbar}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <div className={Classes.logo}>
          <img src="Assets/Images/Subtract.png" />
          <img
            className={Classes.buyzaar_logo_text}
            src="Assets/Images/Buyzaar.png"
          />
        </div>
      </NavLink>
      <SearchBar placeholder="Search product ID or shop ID." />
      <NavLink
        to="/help"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <p className={Classes.help}>Help</p>
      </NavLink>
      <div className={Classes.button_div}>
        <Link to="/register/login">
          <Button className={Classes.button} label="Login" />
        </Link>
        <Link to="/register">
          <Button
            label="Register"
            className={`${Classes.button} ${Classes.register}`}
          />
        </Link>
        <Link to="/cart">
          <ShoppingCartIcon className={Classes.cart} sx={{ color: "white" }} />
        </Link>
      </div>
    </nav>
  );
};

export default StyledNavbar;
