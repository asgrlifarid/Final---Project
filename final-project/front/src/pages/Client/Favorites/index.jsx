import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { toggleFavorites } from "../../../redux/features/wishlistSlice";
import styles from "./index.module.scss";

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.wishlist.items);

  return (
    <div className={styles.container}>
      {wishlist.length === 0 ? (
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6rB6kc58LJuR8PRW_mnCv3dQydwIjlfg_Q&s"
            alt=""
          />
          <p className={styles.emptyMessage}>Wishlist is empty</p>
        </div>
      ) : (
        <div className={styles.allDiv}>
          {wishlist.map((game) => (
            <div key={game._id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={game.imageUrl} alt={game.title} />
              </div>
              <p className={styles.title}>{game.title}</p>
              <div className={styles.icons}>
                <button onClick={() => dispatch(toggleFavorites(game))}>
                  {wishlist.find((q) => q._id === game._id) ? (
                    <FaHeart />
                  ) : (
                    <CiHeart />
                  )}
                </button>
                <Link to={`/products/${game._id}`}>
                  <IoMdInformationCircleOutline />
                </Link>
              </div>
              <h1 className={styles.price}>${game.price}</h1>
            </div>
          ))}
        </div>
      )}
      <button className={styles.goHomeButton} onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
};

export default Wishlist;
