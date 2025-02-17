import { Routes, Route } from "react-router-dom";

import "./App.css";
import ClientLayout from "./layout/ClientLayout";
import Home from "./pages/Client/Home";
import Login from "./pages/Client/Login";
import Register from "./pages/Client/Register";
import Wishlist from "./pages/Client/Favorites";
import DetailGame from "./pages/Client/DetailGame";
import Privacy from "./pages/Client/Privacy";
import TeamOfUse from "./pages/Client/TeamOfUse";
import Cookies from "./pages/Client/CookiePrivacy";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/games/:id" element={<DetailGame />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tos" element={<TeamOfUse />} />
          <Route path="/cookies" element={<Cookies />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
