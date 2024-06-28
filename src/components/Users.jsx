import { Link } from "react-router-dom";
import { useDeleteUserMutation, useGetUsersQuery } from "../RTK/userAPI";

const Users = () => {
  const {
    data: users,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetUsersQuery();

  const [deleteUser] = useDeleteUserMutation();

  return (
    <div className="d-flex justify-content-center p-3 flex-wrap">
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>Something went wrong</h3>}
      {isSuccess &&
        users.map((user) => (
          <div key={user.id} className="p-3 border border-2 border-dark m-2">
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => {
                if (
                  window.confirm(
                    `Are you sure to delete the User: ${user.name}`
                  )
                ) {
                  deleteUser(user.id);
                }
              }}
            >
              Delete
            </button>
            <Link
              className="btn btn-sm btn-success ms-2"
              to={`/edit/${user.id}`}
            >
              Edit
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Users;
