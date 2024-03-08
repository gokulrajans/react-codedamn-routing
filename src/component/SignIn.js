import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { fetchUserData } from "../features/UserDataSlice";

const SignIn = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState([]);
  const handleChange = (e) => {
    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // });
    console.log(e);
  };

  const checkUserIsExist = (username, password) => {
    let isExist = false;
    console.log(formData);
    formData?.map((data) => {
      if (data?.email == username && data?.name == password) {
        isExist = true;
        return;
      }
    });
    return isExist;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const authCheck = checkUserIsExist(
      e?.currentTarget?.[0]?.value,
      e?.currentTarget?.[1]?.value
    );
    if (authCheck) {
      navigate("/profile-details");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      setFormData(data);
      console.log(data, "data-- check");
    };
    fetchData();
  }, []);

  // useEffect(()=> {
  //   dispatch()
  // }, [])

  return (
    <div>
      <div>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
