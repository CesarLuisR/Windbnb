import React, { useState } from "react";
import "../../styles/layout/Header.css";
import logo from "../../assets/logo.svg";
import Search from "../common/Search";
import Modal from "./Modal";
import { useSelector } from "react-redux";

const Header = () => {
  const [render, setRender] = useState();
  const [modalState, setModalState] = useState(null);
  const data = useSelector((store) => store.searchInfoReducer.data);

  const handleModalState = (e) => {
    e.stopPropagation();
    setModalState(e.target.dataset.name);
    setRender(true);
  };

  const closeModal = () => {
    setRender(false);
    setModalState(null);
  };

  return (
    <header className="header">
      <Modal state={modalState} render={render} closeModal={closeModal} />
      <img src={logo} alt="logo" className="logo" />
      <div className="search-zone">
        <Search handleModalState={handleModalState} data={data} />
      </div>
    </header>
  );
};

export default Header;
