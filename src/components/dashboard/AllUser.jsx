import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmModal from "../Shared/ConfirmModal";

const AllUser = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [deleteUser, setDeleteUser] = useState(null);
  const closeModal = () => {
    setDeleteUser(null);
  };

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://resale-handing-server-side-770erufms-th-raju.vercel.app/users"
      );
      const data = await res.json();
      const filteredData = data?.filter((user) => user.role !== "super_admin");
      return filteredData;
    },
  });
  const handleDeleteUser = (user) => {
    fetch(
      `https://resale-handing-server-side-770erufms-th-raju.vercel.app/users/${user._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("User Delete successfully");
        }
        refetch();
      });
  };

  const handleMakeAdmin = (id) => {
    fetch(
      `https://resale-handing-server-side-770erufms-th-raju.vercel.app/users/admin/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successful");
          refetch();
        }
      });
  };
  const pagi = () => {
    if (end < users.length) {
      setStart(start + 10);
      setEnd(end + 10);
      refetch();
    } else {
      setStart(0);
      setEnd(10);
    }
  };

  const pagiBack = () => {
    if (start > 10) {
      setStart(start - 10);
      setEnd(end - 10);
      refetch();
    } else {
      setStart(0);
      setEnd(10);
    }
  };

  return (
    <div className="mb-14">
      <h2 className="text-4xl text-center font-bold my-5">All User</h2>
      <div className="flex justify-end gap-4 mb-2 mr-3 items-center">
        {start > 1 && (
          <button className="btn btn-sm btn-primary" onClick={() => pagiBack()}>
            {"<"}
          </button>
        )}
        <p>
          {start} - {end < users.length ? end : users.length} ({users.length})
        </p>
        <button className="btn btn-sm btn-primary" onClick={() => pagi()}>
          {">"}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.slice(start, end).map((user, i) => (
              <tr key={user._id} className="hover">
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user?.role !== "Admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-primary md:btn-md btn-sm"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <label
                    onClick={() => setDeleteUser(user)}
                    htmlFor="confirmation-modal"
                    className="btn btn-warning md:btn-md btn-sm"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteUser && (
        <ConfirmModal
          title={`Are You sure you want to delete?`}
          message={`If You delete ${deleteUser.name}. It cannot be undone.`}
          closeModal={closeModal}
          successButtonName="Delete"
          successAction={handleDeleteUser}
          modalData={deleteUser}
        ></ConfirmModal>
      )}
    </div>
  );
};

export default AllUser;
