import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LocalForm = () => {
  const [frmData, setFrmData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [data, setData] = useState({});
  let navigate=useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFrmData({ ...frmData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userdata", JSON.stringify(frmData));
      navigate("/show");
  };

  const fetchData = () => {
    const user = JSON.parse(localStorage.getItem("userdata"));
    setData(user);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleInput}
          />
          <br />
          <br />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleInput}
          />
          <br />
          <br />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleInput}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Sign Up"
            onChange={handleInput}
          />
        </form>
      </div>
      <hr/>
      <div>
        <button onClick={fetchData}>Get Data</button>
        <h1>Your Details</h1>
        <div>
          <p>Name: {data.username}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
        </div>
      </div>
    </div>
  );
};

export default LocalForm;
