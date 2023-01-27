import React from 'react'
import {useGlobalContext} from "../context/context" // costum Hook umuzu import ediyoruz.
import team from "../helper/team.jpg" // logomozu import ediyoruz.

import {FaBars} from "react-icons/fa"

const Navbar = () => {
    const {openSidebar,openModal,closeModal} = useGlobalContext()
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={team} alt="logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn">Ürünlerimiz</button>
          </li>
          <li>
            <button className="link-btn">Geliştirmelerimiz</button>
          </li>
          <li>
            <button className="link-btn">Şirketimiz</button>
          </li>
        </ul>
        <div>
          {" "}
          <button className="btn sign-btn">Giriş Yap </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar