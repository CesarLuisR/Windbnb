import React from "react";
import "../styles/views/Home.css";
import Header from "../components/layout/Header";
import StayContainer from "../components/layout/StayContainer";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Header />
        <StayContainer />
      </div>
    </div>
  );
};

export default Home;