import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedProductLayout from "./pages/SharedProductLayout";
import SharedNavbar from "./pages/SharedNavbar";
import SignUp from "./pages/SignUp/SignUp";
import AuthContextProvider from "./Context/AuthContext";
import StyledNavbar from "./components/StyledNavbar";

function App() {
  const [user, setUser] = useState(null);
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="products" element={<SharedProductLayout />}>
              <Route index element={<Products />} />
              <Route path=":productId" element={<SingleProduct />} />
            </Route>

            <Route
              path="dashboard"
              element={
                <ProtectedRoute user={user}>
                  <Dashboard user={user} />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/register" element={<SharedLayout />}>
            <Route index element={<SignUp />} />
            <Route path=":route" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
