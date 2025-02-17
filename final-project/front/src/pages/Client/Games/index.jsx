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

const Games = () => {
  const { data, isLoading, isError } = useGetGamesQuery();
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoading) return <h1>Loading ...</h1>;
  if (isError) return <h1>Some Error Occurred ..!</h1>;

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
                <button onClick={() => dispatch(toggleFavorites(game))}>
                  {wishlist?.find((q) => q._id === game._id) ? (
                    <FaHeart />
                  ) : (
                    <CiHeart />
                  )}
                </button>
                <button>
                  <Link to={`/games/${game._id}`}>
                    <IoMdInformationCircleOutline />
                  </Link>
                </button>
                <button onClick={() => (window.location.href = game.gameLink)}>
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
