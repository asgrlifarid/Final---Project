import React from "react";
import Swal from "sweetalert2";
import "./index.css";
import {
  useBanUserMutation,
  useDeleteUsersMutation,
  useEditUserMutation,
  useGetUsersQuery,
} from "../../../redux/services/usersApi";

const UsersTable = () => {
  const { data, refetch } = useGetUsersQuery();
  const [deleteUser] = useDeleteUsersMutation();
  const [editUser] = useEditUserMutation();
  const [banUser] = useBanUserMutation();

  const handleDelete = async (userId) => {
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
        await deleteUser(userId);
        refetch();
        Swal.fire("Deleted!", "User has been deleted.", "success");
      }
    });
  };

  const handleEdit = async (user) => {
    const { value: formValues } = await Swal.fire({
      title: "Edit User",
      html: `
        <input id="swal-username" class="swal2-input" placeholder="Username" value="${user.username}" />
        <input id="swal-email" class="swal2-input" placeholder="Email" value="${user.email}" />
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Save",
      preConfirm: () => {
        return {
          username: document.getElementById("swal-username").value,
          email: document.getElementById("swal-email").value,
        };
      },
    });

    if (formValues) {
      await editUser({ id: user._id, data: formValues });
      refetch();
      Swal.fire("Updated!", "User details have been updated.", "success");
    }
  };

  const handleBan = async (user) => {
    const bannedUntil = user.bannedUntil ? new Date(user.bannedUntil) : null;
    const now = new Date();

    const isBanned = bannedUntil && bannedUntil > now;
    const banMessage = isBanned
      ? `Current Ban Until: ${bannedUntil.toLocaleString()}`
      : "Not Banned";

    const { value: banDuration } = await Swal.fire({
      title: `Ban User - ${user.username}`,
      input: "number",
      inputLabel: `${banMessage}`,
      inputPlaceholder: "Enter number of days (0 to unban)",
      showCancelButton: true,
      confirmButtonText: "Update Ban",
    });

    if (banDuration !== null) {
      await banUser({ id: user._id, banDuration: parseInt(banDuration, 10) });
      await refetch();
      Swal.fire(
        banDuration > 0 ? "Banned!" : "Unbanned!",
        banDuration > 0
          ? `User banned for ${banDuration} days.`
          : "User ban has been lifted.",
        "success"
      );
    }
  };

  return (
    <div className="users-table-container">
      <h2 className="users-table-title">Users List</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Ban Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.map((user) => {
              const bannedUntil = user.bannedUntil
                ? new Date(user.bannedUntil)
                : null;
              const now = new Date();
              const isBanned = bannedUntil && bannedUntil > now;
              return (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    {isBanned
                      ? `Banned until: ${bannedUntil.toLocaleString()}`
                      : "Not Banned"}
                  </td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="edit-button"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="ban-button"
                      onClick={() => handleBan(user)}
                    >
                      Ban
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
