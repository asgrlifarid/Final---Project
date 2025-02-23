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

import GameTable from "./pages/Admin/Game";
import UsersTable from "./pages/Admin/Users/UserTable";
import AdminLayout from "./layout/AdminLayout";
import { AddGame } from "./pages/Admin/AddGames";
import { AddTournament } from "./pages/Admin/AddTournament";
import TournamentTable from "./pages/Admin/Tournaments";
import Aadmin from "./pages/Admin/Aadmin";
import AdminLogin from "./pages/Admin/AdminLogin";
import RegisterTournament from "./pages/Client/RegisterTournament";


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
          <Route path="/registertournament/:tournamentId" element={<RegisterTournament />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
      <Routes>
        <Route path="/admindashboard" element={<AdminLayout />}>
          <Route index element={<Aadmin />} />
          <Route path="/admindashboard/games" element={<GameTable />} />
          <Route path="/admindashboard/users" element={<UsersTable />} />
          <Route
            path="/admindashboard/tournaments"
            element={<TournamentTable />}
          />
          <Route
            path="/admindashboard/addtournaments"
            element={<AddTournament />}
          />
          <Route path="/admindashboard/addgames" element={<AddGame />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
