import { useNavigate } from "react-router-dom";
import { useGetTournamentsQuery } from "../../../redux/services/tournamentApi";
import "./index.css";

export default function Tournament() {
  const { data, isLoading, isError } = useGetTournamentsQuery();
  const navigate = useNavigate();

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div className="error">Error loading tournaments</div>;

  const handleRegisterClick = (tournamentId) => {
    // Navigate to the register page with the tournament ID as a query parameter or use it as needed.
    navigate(`/registertournament/${tournamentId}`);
  };

  return (
    <div className="tournaments-wrapper">
      <div className="tournaments-container">
        {data?.data?.map((tournament) => (
          <div key={tournament._id} className="tournament-card">
            <div className="image-container">
              <img
                src={tournament.imageUrl}
                alt={tournament.tournamentName}
                className="tournament-image"
              />
              <span className="category-badge">{tournament.category}</span>
            </div>

            <div className="tournament-content">
              <h3 className="tournament-title">{tournament.title}</h3>

              <div className="tournament-details">
                <p>
                  <span className="label">Tournament:</span>{" "}
                  {tournament.tournamentName}
                </p>
                <p>
                  <span className="label">Start Time:</span>{" "}
                  {tournament.startTime}
                </p>
                <p>
                  <span className="label">Max - Players:</span>{" "}
                  {tournament.playersCount}
                </p>
              </div>

              <button
                className="register-button"
                onClick={() => handleRegisterClick(tournament._id)}
              >
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
