import React, { useState } from "react";

export default function Signup() {
  const [signUpUserData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",

  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${signUpUserData.firstname}, lastName: ${signUpUserData.lastname},username: ${signUpUserData.username} email: ${signUpUserData.email},  password: ${signUpUserData.password}, confirmpassword: ${signUpUserData.confirmpassword}, `
    

      );
  };

  return (
    <form onSubmit={handleSubmit} className="SignupUser">
      
      
      
      
      
      <label className="signup__text" htmlFor="firstname">
      firstname:
      </label>
      <input
        type="text"
        id="firstname"
        className="signup__input"
        name="firstname"
        value={signUpUserData.firstname}
        onChange={handleChange}
      />
<br />
<label className="signup__text" htmlFor="lastname">
lastname:
      </label>
      <input
        type="text"
        id="lastname"
        className="signup__input"
        name="lastname"
        value={signUpUserData.lastname}
        onChange={handleChange}
      />
<br />
<label className="signup__text" htmlFor="username">
username:
      </label>
      <input
        type="text"
        id="username"
        className="addproduct__input"
        name="username"
        value={signUpUserData.username}
        onChange={handleChange}
      />
<br />
<label className="signup__text" htmlFor="email">
email:
      </label>
      <input
        type="text"
        id="email"
        className="signup__input"
        name="email"
        value={signUpUserData.email}
        onChange={handleChange}
      />
<br />
<label className="signup__text" htmlFor="password">
password:
      </label>
      <input
        type="password"
        id="password"
        className="signup__input"
        name="password"
        value={signUpUserData.password}
        onChange={handleChange}
      />

<br />
<label className="signup__text" htmlFor="confirmpassword">
confirmpassword:
      </label>
      <input
        type="password"
        id="confirmpassword"
        className="signup__input"
        name="confirmpassword"
        value={signUpUserData.confirmpassword}
        onChange={handleChange}
      />

<br />

      <button className="signup__button" type="submit">
        Submit
      </button>



    </form>
  );
}
