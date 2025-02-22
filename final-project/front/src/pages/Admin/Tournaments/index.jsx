import React from "react";
import Swal from "sweetalert2";

import "./index.css";
import { useDeleteTournamentsMutation, useEditTournamentsMutation, useGetTournamentsQuery } from "../../../redux/services/tournamentApi";

const TournamentTable = () => {
  const { data, refetch } = useGetTournamentsQuery();
  const [deleteTournamentById] = useDeleteTournamentsMutation();
  const [editTournament] = useEditTournamentsMutation();

  const handleDelete = (tournamentId) => {
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
          await deleteTournamentById(tournamentId);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Tournament has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (tournament) => {
    const { value: formValues } = await Swal.fire({
      title: "Edit Tournament",
      html:
        '<input id="swal-title" class="swal2-input" placeholder="Title" value="' +
        tournament.title +
        '" />' +
        '<input id="swal-gameName" class="swal2-input" placeholder="Game Name" value="' +
        tournament.tournamentName +
        '" />' +
        '<input id="swal-image" class="swal2-input" placeholder="Image URL" value="' +
        tournament.imageUrl +
        '" />' +
        '<input id="swal-startTime" class="swal2-input" placeholder="Start Time" value="' +
        tournament.startTime +
        '" />' +
        '<input id="swal-playersCount" class="swal2-input" type="number" placeholder="Players Count" value="' +
        tournament.playersCount +
        '" />' +
        '<input id="swal-category" class="swal2-input" placeholder="Category" value="' +
        tournament.category +
        '" />',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Save",
      preConfirm: () => {
        return {
          title: document.getElementById("swal-title").value,
          tournamentName: document.getElementById("swal-gameName").value,
          imageUrl: document.getElementById("swal-image").value,
          startTime: document.getElementById("swal-startTime").value,
          playersCount: document.getElementById("swal-playersCount").value,
          category: document.getElementById("swal-category").value,
        };
      },
    });

    if (formValues) {
      await editTournament({ id: tournament._id, ...formValues });
      refetch();
      Swal.fire("Updated!", "Tournament details have been updated.", "success");
    }
  };

  return (
    <div className="tournament-table-container">
      <h2 className="tournament-table-title">Tournaments List</h2>
      <table className="tournament-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Game Name</th>
            <th>Tournament Name</th>
            <th>Start Time</th>
            <th>Players Count</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.map((tournament) => (
              <tr key={tournament._id}>
                <td>
                  <img
                    src={tournament.imageUrl}
                    alt={tournament.title}
                    className="tournament-image"
                  />
                </td>
                <td>{tournament.title}</td>
                <td>{tournament.tournamentName}</td>
                <td>{tournament.startTime}</td>
                <td>{tournament.playersCount}</td>
                <td>{tournament.category}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(tournament._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(tournament)}
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

export default TournamentTable;
