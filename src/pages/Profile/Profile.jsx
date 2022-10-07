import "./Profile.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetcherPostWithToken } from "../../services/fetcher";
import {
  getInfos,
  getLastName,
  getFirstName,
} from "../../features/User/userSlice";
import { getToken } from "../../features/Login/loginSlice";
import { useEffect, useState } from "react";

export default function Profile() {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const isUser = useSelector(getFirstName);
  const navigate = useNavigate();
  const firstName = useSelector(getFirstName);
  const lastName = useSelector(getLastName);
  const token = useSelector(getToken);

  const getProfile = async () => {
    if (isUser === "") {
      const response = await fetcherPostWithToken(
        "http://localhost:3001/api/v1/user/profile",
        {},
        token
      );
      const data = await response.json();
      await dispatchUserInfos(data);
    }
  };

  const dispatchUserInfos = async (data) => {
    await dispatch(getInfos(data));
  };

  const toggleButton = () => setIsEditing(!isEditing);

  const buttonOpen = () => {
    return (
      <React.Fragment>
        <h1>Welcome back</h1>
        <div className="edit-form">
          <div className="row">
            <input
              type="text"
              placeholder={firstName}
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder={lastName}
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
            />
          </div>
          <div className="row">
            <button onClick={submitForm}>Save</button>
            <button onClick={toggleButton}>Cancel</button>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const buttonClose = () => {
    return (
      <React.Fragment>
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}!
        </h1>
        <button className="edit-button" onClick={toggleButton}>
          Edit Name
        </button>
      </React.Fragment>
    );
  };

  const submitForm = () => {
    console.log(newFirstName, newLastName);
  }

  useEffect(() => {
    if (token === null) navigate("/login");
    if (token !== null && isUser === "") getProfile();
  });

  return (
    <React.Fragment>
      <Navbar />
      <main className="main bg-dark">
        <div className="header">
          {isEditing ? buttonOpen() : buttonClose()}
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
