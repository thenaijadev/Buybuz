import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default Home;
