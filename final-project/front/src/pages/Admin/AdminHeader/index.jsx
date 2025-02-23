import React from 'react'
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <div>
      <header>
        <section id="header">
          <div className="logo">
            <img
              src="https://escharts.com/img/logos/esc-logo-white.svg"
              alt="Logo"
            />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/admindashboard/users">Users</Link>
              </li>

              <li>
                <Link to="/admindashboard/tournaments">Tournaments</Link>
              </li>
              <li>
                <Link to="/admindashboard/games">Games</Link>
              </li>
              <li>
                <Link to="/admindashboard/addtournaments">Add Tournament</Link>
              </li>
              <li>
                <Link to="/admindashboard/addgames">Add Game</Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </div>
  );
}

export default AdminHeader
