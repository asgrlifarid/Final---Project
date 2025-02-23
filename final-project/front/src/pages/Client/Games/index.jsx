import React from "react";
import "./index.css";
import { useGetGamesQuery } from "../../../redux/services/gamesApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../../../redux/features/wishlistSlice";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Swal from "sweetalert2"; // SweetAlert2 import edilmesi

const Games = () => {
  const { data, isLoading, isError } = useGetGamesQuery();
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = localStorage.getItem("username"); // Kullanıcı adı localStorage'dan alınıyor

  if (isLoading) return <h1>Loading ...</h1>;
  if (isError) return <h1>Some Error Occurred ..!</h1>;

  // Eğer kullanıcı login olmuşsa, favoriye ekleme işlemi yapılacak fonksiyon
  const handleFavoriteToggle = (game) => {
    dispatch(toggleFavorites(game)); // Favoriye ekleme işlemi
  };

  // Eğer kullanıcı login olmamışsa, yönlendirme yapılacak fonksiyon
  const handleNavigation = () => {
    Swal.fire({
      title: "You are not logged in!",
      text: "Please log in .",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Go to Login",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login"); // Login sayfasına yönlendirme
      }
    });
  };

  // Eğer kullanıcı login olmamışsa, oyun linkine gitmek yerine login sayfasına yönlendir
  const handleGameLink = (gameLink) => {
    if (username === "Guest" || !username) {
      handleNavigation(); // Kullanıcı login değilse yönlendirme yapılır
    } else {
      window.location.href = gameLink; // Kullanıcı login olmuşsa oyun linkine gidilir
    }
  };

  // Eğer kullanıcı login olmamışsa, oyun detay sayfasına gitmek yerine login sayfasına yönlendir
  const handleGameDetail = (gameId) => {
    if (username === "Guest" || !username) {
      handleNavigation(); // Kullanıcı login değilse yönlendirme yapılır
    } else {
      navigate(`/games/${gameId}`); // Kullanıcı login olmuşsa oyun detay sayfasına gidilir
    }
  };

  return (
    <div className="container">
      <div className="games-wrapper">
        {data.data.map((game) => (
          <div key={game._id} className="game-card">
            <img src={game.imageUrl} alt={game.title} className="game-image" />
            <div className="game-info">
              <h1>{game.title}</h1>
              <p>${game.price}</p>
              <div className="game-buttons">
                <button
                  onClick={() => {
                    if (username === "Guest" || !username) {
                      handleNavigation(); // Login olmamışsa, navigate fonksiyonu çalışacak
                    } else {
                      handleFavoriteToggle(game); // Login olmuşsa, favoriye ekleme işlemi yapılacak
                    }
                  }}
                >
                  {wishlist?.find((q) => q._id === game._id) ? (
                    <FaHeart />
                  ) : (
                    <CiHeart />
                  )}
                </button>
                <button onClick={() => handleGameDetail(game._id)}>
                  <IoMdInformationCircleOutline />
                </button>
                <button onClick={() => handleGameLink(game.gameLink)}>
                  <RiLogoutBoxRLine />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
