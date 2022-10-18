import "./Transactions.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import React, { useEffect } from "react";
import { getToken } from "../../features/Login/loginSelector";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Transactions() {
  const token = useSelector(getToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) navigate("/login");
  });

  return (
    <React.Fragment>
      <Navbar />
      <header className="headingAccount">
        <div className="accountName">Argent Bank Checking (x8349)</div>
        <div className="amount">$2,082.79</div>
        <div>Available Balance</div>
      </header>
      <main className="mainTransactionsContainer">
        <div className="dropDownContainer">
          <div className="dropDownTitles">
            <div className="emptyColumn"></div>
            <div>DATE</div>
            <div>DESCRIPTION</div>
            <div>AMOUNT</div>
            <div>BALANCE</div>
          </div>
          <div className="dropDown">
            <div className="row">
              <i className="fa-sharp fa-solid fa-chevron-down fa-2x"></i>
              <div className="dropDownInfosDate">June 20th, 2020</div>
              <div className="dropDownInfosDescription">Golden Sun Bakery</div>
              <div className="dropDownInfosAmount">$5.00</div>
              <div className="dropDownInfosBalance">$2082.79</div>
            </div>
          </div>
          <div className="dropDown">
            <div className="row">
              <i className="fa-sharp fa-solid fa-chevron-down fa-2x"></i>
              <div className="dropDownInfosDate">June 20th, 2020</div>
              <div className="dropDownInfosDescription">Golden Sun Bakery</div>
              <div className="dropDownInfosAmount">$10.00</div>
              <div className="dropDownInfosBalance">$2087.79</div>
            </div>
          </div>
          <div className="dropDown">
            <div className="row">
              <i className="fa-sharp fa-solid fa-chevron-down fa-2x"></i>
              <div className="dropDownInfosDate">June 20th, 2020</div>
              <div className="dropDownInfosDescription">Golden Sun Bakery</div>
              <div className="dropDownInfosAmount">$20.00</div>
              <div className="dropDownInfosBalance">$2097.79</div>
            </div>
          </div>
          <div className="dropDown">
            <div className="row">
              <i className="fa-sharp fa-solid fa-chevron-down fa-2x"></i>
              <div className="dropDownInfosDate">June 20th, 2020</div>
              <div className="dropDownInfosDescription">Golden Sun Bakery</div>
              <div className="dropDownInfosAmount">$30.00</div>
              <div className="dropDownInfosBalance">$2117.79</div>
            </div>
          </div>
          <div className="dropDown">
            <div className="row">
              <i className="fa-sharp fa-solid fa-chevron-down fa-2x"></i>
              <div className="dropDownInfosDate">June 20th, 2020</div>
              <div className="dropDownInfosDescription">Golden Sun Bakery</div>
              <div className="dropDownInfosAmount">$40.00</div>
              <div className="dropDownInfosBalance">$2147.79</div>
            </div>
          </div>
          <div className="dropDown">
            <div className="row">
              <i className="fa-sharp fa-solid fa-chevron-up fa-2x"></i>
              <div className="dropDownInfosDate">June 20th, 2020</div>
              <div className="dropDownInfosDescription">Golden Sun Bakery</div>
              <div className="dropDownInfosAmount">$50.00</div>
              <div className="dropDownInfosBalance">$2187.79</div>
            </div>
            <div className="row rowDescription">
              <div className="emptyColumn"></div>
              <div className="dropDownInfosDetails">
                <div className="dropDownDetailsTransactionType">
                  Transaction Type: Electronic
                </div>
                <div className="dropDownDetailsCategory">
                  Category: Food<i className="fa-solid fa-pen"></i>
                </div>
                <div className="dropDownDetailsNotes">
                  Notes:<i className="fa-solid fa-pen"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}
