import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetGamesByIdQuery } from "../../../redux/services/gamesApi";
import "./index.css"
const DetailGame = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetGamesByIdQuery(id);
  const [game, setGame] = useState(null);

  useEffect(() => {
    if (data) {
      setGame(data.data);
    }
  }, [data]);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error)
    return <div className="error">Error occurred: {error.message}</div>;

  return (
    <div className="container">
      {game ? (
        <div className="detail">
          <div className="image-container">
            <img src={game.imageUrl} alt={game.title} className="game-image" />
          </div>
          <div className="infos">
            <h2 className="game-title">{game.title}</h2>
            <p className="game-description">{game.description}</p>
            <p className="game-price">
              Price: <span>${game.price}</span>
            </p>
            <p className="game-category">
              Category: <span>{game.category}</span>
            </p>
            <button className="go-home-button" onClick={() => navigate("/")}>
              Go Home
            </button>
          </div>
        </div>
      ) : (
        <p className="not-found">Product not found</p>
      )}
    </div>
  );
};

export default DetailGame;
