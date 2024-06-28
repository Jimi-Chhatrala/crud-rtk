import { useEffect, useState } from "react";
import { useGetUserQuery, useUpdateUserMutation } from "../RTK/userAPI";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    id: id,
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { data } = useGetUserQuery(id);

  useEffect(() => {
    if (data) {
      setUser({ ...user, name: data.name, email: data.email });
    }
  }, [data]);

  const [updateUser] = useUpdateUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(user);
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <form className="border border-2 border-dark p-3" onSubmit={handleSubmit}>
        <h3>Update User</h3>
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
