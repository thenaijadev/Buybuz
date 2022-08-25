import { Fragment } from "react";
import Classes from "./SearchBar.module.css";
const SearchBar = (props) => {
  return (
    <div>
      <input
        className={Classes.searchbar}
        placeholder={props.placeholder}
      ></input>
      <img
        className={Classes.search_icon}
        alt="icon"
        src="Assets/Images/Search_Icons_UIA.png"
      />
    </div>
  );
};

export default SearchBar;
