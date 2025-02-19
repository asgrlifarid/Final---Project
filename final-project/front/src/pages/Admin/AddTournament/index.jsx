import React from "react";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import "./index.css";
import { usePostTournamentsMutation } from "../../../redux/services/tournamentApi";
import { AddTournamentSchema } from "../../../components/validation/validationTournament";

export const AddTournament = () => {
  const [postNewTournament] = usePostTournamentsMutation();
  const formik = useFormik({
    initialValues: {
      title: "",
      gameName: "",
      imageUrl: "",
      startTime: "",
      playersCount: "",
      category: "",
    },
    validationSchema: AddTournamentSchema,
    onSubmit: async (values) => {
      try {
        await postNewTournament(values);
        Swal.fire({
          title: "Tournament Added!",
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
    <div className="add-tournament-container">
      <form onSubmit={formik.handleSubmit} className="add-tournament-form">
        <label htmlFor="title" className="add-tournament-label">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          className="add-tournament-input"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title && formik.touched.title && (
          <p className="add-tournament-error">{formik.errors.title}</p>
        )}

        <label htmlFor="gameName" className="add-tournament-label">
          Game Name
        </label>
        <input
          id="gameName"
          name="gameName"
          type="text"
          className="add-tournament-input"
          onChange={formik.handleChange}
          value={formik.values.gameName}
        />
        {formik.errors.gameName && formik.touched.gameName && (
          <p className="add-tournament-error">{formik.errors.gameName}</p>
        )}

        <label htmlFor="imageUrl" className="add-tournament-label">
          Image URL
        </label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="text"
          className="add-tournament-input"
          onChange={formik.handleChange}
          value={formik.values.imageUrl}
        />
        {formik.errors.imageUrl && formik.touched.imageUrl && (
          <p className="add-tournament-error">{formik.errors.imageUrl}</p>
        )}

        <label htmlFor="startTime" className="add-tournament-label">
          Start Time
        </label>
        <input
          id="startTime"
          name="startTime"
          type="text"
          className="add-tournament-input"
          onChange={formik.handleChange}
          value={formik.values.startTime}
        />
        {formik.errors.startTime && formik.touched.startTime && (
          <p className="add-tournament-error">{formik.errors.startTime}</p>
        )}

        <label htmlFor="playersCount" className="add-tournament-label">
          Players Count
        </label>
        <input
          id="playersCount"
          name="playersCount"
          type="number"
          className="add-tournament-input"
          onChange={formik.handleChange}
          value={formik.values.playersCount}
        />
        {formik.errors.playersCount && formik.touched.playersCount && (
          <p className="add-tournament-error">{formik.errors.playersCount}</p>
        )}

        <label htmlFor="category" className="add-tournament-label">
          Category
        </label>
        <input
          id="category"
          name="category"
          type="text"
          className="add-tournament-input"
          onChange={formik.handleChange}
          value={formik.values.category}
        />
        {formik.errors.category && formik.touched.category && (
          <p className="add-tournament-error">{formik.errors.category}</p>
        )}

        <button type="submit" className="add-tournament-button">
          Submit
        </button>
      </form>
    </div>
  );
};
