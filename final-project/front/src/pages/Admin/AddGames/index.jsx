import React from "react";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import "./index.css";
import { usePostGamesMutation } from "../../../redux/services/gamesApi";
import { AddGameSchema } from "../../../components/validation/validationGames";

export const AddGame = () => {
  const [postNewGame] = usePostGamesMutation(); // Assuming the mutation is for adding a game
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      imageUrl: "",
      raiting: "",
      gameLink: "",
      category: "",
    },
    validationSchema: AddGameSchema , // Use the validation schema for games
    onSubmit: async (values) => {
      try {
        await postNewGame(values); // Posting new game
        Swal.fire({
          title: "Game Added!",
          icon: "success",
          draggable: true,
        });
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="add-game-container">
      <form onSubmit={formik.handleSubmit} className="add-game-form">
        <label htmlFor="title" className="add-game-label">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          className="add-game-input"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title && formik.touched.title && (
          <p className="add-game-error">{formik.errors.title}</p>
        )}

        <label htmlFor="price" className="add-game-label">
          Price
        </label>
        <input
          id="price"
          name="price"
          type="number"
          className="add-game-input"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.errors.price && formik.touched.price && (
          <p className="add-game-error">{formik.errors.price}</p>
        )}

        <label htmlFor="description" className="add-game-label">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="add-game-input"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.errors.description && formik.touched.description && (
          <p className="add-game-error">{formik.errors.description}</p>
        )}

        <label htmlFor="imageUrl" className="add-game-label">
          Image URL
        </label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="text"
          className="add-game-input"
          onChange={formik.handleChange}
          value={formik.values.imageUrl}
        />
        {formik.errors.imageUrl && formik.touched.imageUrl && (
          <p className="add-game-error">{formik.errors.imageUrl}</p>
        )}

        <label htmlFor="raiting" className="add-game-label">
          Rating
        </label>
        <input
          id="raiting"
          name="raiting"
          type="number"
          className="add-game-input"
          onChange={formik.handleChange}
          value={formik.values.raiting}
        />
        {formik.errors.raiting && formik.touched.raiting && (
          <p className="add-game-error">{formik.errors.raiting}</p>
        )}

        <label htmlFor="gameLink" className="add-game-label">
          Game Link
        </label>
        <input
          id="gameLink"
          name="gameLink"
          type="text"
          className="add-game-input"
          onChange={formik.handleChange}
          value={formik.values.gameLink}
        />
        {formik.errors.gameLink && formik.touched.gameLink && (
          <p className="add-game-error">{formik.errors.gameLink}</p>
        )}

        <label htmlFor="category" className="add-game-label">
          Category
        </label>
        <input
          id="category"
          name="category"
          type="text"
          className="add-game-input"
          onChange={formik.handleChange}
          value={formik.values.category}
        />
        {formik.errors.category && formik.touched.category && (
          <p className="add-game-error">{formik.errors.category}</p>
        )}

        <button type="submit" className="add-game-button">
          Submit
        </button>
      </form>
    </div>
  );
};
