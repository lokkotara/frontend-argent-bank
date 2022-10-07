import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Transactions.scss";

export default function Transactions() {
  return (
      <React.Fragment>
        <Navbar />
        <header>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </header>
        <main>
          <div className="dropDownContainer">
            <div className="dropDown">1</div>
            <div className="dropDown">2</div>
            <div className="dropDown">3</div>
            <div className="dropDown">4</div>
            <div className="dropDown">5</div>
            <div className="dropDown">6</div>
            <div className="dropDown">7</div>
            <div className="dropDown">8</div>
            <div className="dropDown">9</div>
            <div className="dropDown">10</div>
          </div>
        </main>
        <Footer />
      </React.Fragment>
  );
}