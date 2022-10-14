import "./Login.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import React, { useEffect,useState } from "react";
import { fetcherPost } from "../../services/fetcher";
import { login } from "../../features/Login/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isRemembered, setIsRemembered]   = useState(false);
  const [password, setPassword]           = useState("");
  const [username, setUsername]           = useState("");
  const dispatch                          = useDispatch();
  const navigate                          = useNavigate();
  
  const handleDefaultChecked = () => {
    const isSaved = localStorage.getItem("username") ? true : false;
    if (isSaved) {
      setPassword(localStorage.getItem("password"));
      setUsername(localStorage.getItem("username"));
      setIsRemembered(true);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isRemembered) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    }
    const response = await fetcherPost(
      "http://localhost:3001/api/v1/user/login", {email: username, password: password}
    );
    const data = await response.json();
    dispatch(login(data));
    navigate("/profile");
  };

  const rememberMe = (e) => {
    if (e.target.checked) setIsRemembered(true);
    else {
      setIsRemembered(false);
      localStorage.clear();
    }
  };

  useEffect(()=> {
    handleDefaultChecked();
  },[])

  return (
    <React.Fragment>
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" onChange={rememberMe} checked={isRemembered ? "checked": ""}/>
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type="submit">
              Sign in
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
