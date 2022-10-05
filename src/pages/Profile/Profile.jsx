import "./Profile.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetcherPostWithToken } from "../../services/fetcher";
import { getInfos, getUsername } from "../../features/User/userSlice";
import { getToken } from "../../features/Login/loginSlice";
import { useEffect } from "react";

export default function Profile() {
  const dispatch    = useDispatch();
  const isUser      = useSelector(getUsername);
  const navigate    = useNavigate();
  const token       = useSelector(getToken);

  const getProfile = async () => {
    if (isUser === "") {
      const response = await fetcherPostWithToken(
        "http://localhost:3001/api/v1/user/profile",
        {},
        token
      );
      const data = await response.json();
      dispatch(getInfos(data));
    }
  };

  useEffect(() => {
    if (token === null) navigate("/login");
    if (isUser === "") getProfile();
  });

  return (
    <React.Fragment>
      <Navbar />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button
              className="transaction-button"
              onClick={() => navigate("/transactions")}
            >
              View transactions
            </button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button
              className="transaction-button"
              onClick={() => navigate("/transactions")}
            >
              View transactions
            </button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button
              className="transaction-button"
              onClick={() => navigate("/transactions")}
            >
              View transactions
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
