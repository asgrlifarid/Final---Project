import React from "react";
import Swal from "sweetalert2";
import {
  useDeleteGamesMutation,
  useGetGamesQuery,
  useEditGamesMutation,
} from "../../../redux/services/gamesApi";
import "./index.css";

const GameTable = () => {
  const { data, refetch } = useGetGamesQuery();
  const [deleteProductById] = useDeleteGamesMutation();
  const [editGame] = useEditGamesMutation();

  const handleDelete = (productId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteProductById(productId);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (game) => {
    const { value: formValues } = await Swal.fire({
      title: "Edit Game",
      html:
        '<input id="swal-title" class="swal2-input" placeholder="Title" value="' +
        game.title +
        '" />' +
        '<input id="swal-price" class="swal2-input" type="number" placeholder="Price" value="' +
        game.price +
        '" />' +
        '<input id="swal-description" class="swal2-input" placeholder="Description" value="' +
        game.description +
        '" />' +
        '<input id="swal-image" class="swal2-input" placeholder="Image URL" value="' +
        game.imageUrl +
        '" />',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Save",
      preConfirm: () => {
        return {
          title: document.getElementById("swal-title").value,
          price: document.getElementById("swal-price").value,
          description: document.getElementById("swal-description").value,
          imageUrl: document.getElementById("swal-image").value,
        };
      },
    });

    if (formValues) {
      await editGame({ id: game._id, ...formValues });
      refetch();
      Swal.fire("Updated!", "Game details have been updated.", "success");
    }
  };

  return (
    <div className="game-table-container">
      <h2 className="game-table-title">Games List</h2>
      <table className="game-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.map((game) => (
              <tr key={game._id}>
                <td>
                  <img
                    src={game.imageUrl}
                    alt={game.title}
                    className="game-image"
                  />
                </td>
                <td>{game.title}</td>
                <td>${game.price}</td>
                <td>{game.description}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(game._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(game)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameTable;
