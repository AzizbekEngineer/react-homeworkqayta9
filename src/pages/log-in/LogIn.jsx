import React, { useState } from "react";
import loginImg from "../../assets/images/products/login-img.svg";
import "./LogIn.scss";
import axios from "../../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogIn = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");

  const handleLogin = (e) => {
    e.preventDefault();

    let user = { username, password };

    axios
      .post("auth/login", user)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
        toast.error("username or password incorrect");
      });
  };

  return (
    <section id="login">
      <div className="container login">
        <div className="login__left">
          <img src={loginImg} alt="img" />
        </div>
        <div className="login__right">
          <h2 className="login__title">Log in to Exclusive</h2>
          <p className="login__info">Enter your details below</p>
          <form onSubmit={handleLogin} className="login__form" action="">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login__email login__input"
              type="text"
              placeholder="Email or Phone Number"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login__password login__input"
              type="password"
              placeholder="Password"
            />
            <div className="login__btns">
              <button className="login__log-in-btn">Log in</button>
              <button className="login__forget-btn">Forget Password?</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
