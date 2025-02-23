import { useNavigate } from "react-router-dom";
import { useGetTournamentsQuery } from "../../../redux/services/tournamentApi";
import Swal from "sweetalert2"; // SweetAlert2 import edilmesi
import "./index.css";

export default function Tournament() {
  const { data, isLoading, isError } = useGetTournamentsQuery();
  const navigate = useNavigate();
  const username = localStorage.getItem("username"); // Kullanıcı adı localStorage'dan alınıyor

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div className="error">Error loading tournaments</div>;

  const handleRegisterClick = (tournamentId) => {
    // Eğer kullanıcı login olmamışsa, login sayfasına yönlendirme yapıyoruz
    if (username === "Guest" || !username) {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please log in to register for this tournament.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Go to Login",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login"); // Login sayfasına yönlendirme
        }
      });
    } else {
      navigate(`/registertournament/${tournamentId}`); // Kullanıcı login olmuşsa, turnuva kaydına yönlendiriyoruz
    }
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
