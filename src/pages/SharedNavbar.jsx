import { Link, Outlet } from "react-router-dom";

import StyledNavbar from "../components/StyledNavbar";

const SharedNavbar = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};
export default SharedNavbar;
