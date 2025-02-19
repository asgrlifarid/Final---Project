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
                <Link to="/admin/users">Users</Link>
              </li>
              
              <li>
                <Link to="/admin/tournaments">Tournaments</Link>
              </li>
              <li>
                <Link to="/admin/games">Games</Link>
              </li>
              <li>
                <Link to="/admin/addtournaments">Add Tournament</Link>
              </li>
              <li>
                <Link to="/admin/addgames">Add Game</Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </div>
  );
}

export default AdminHeader
