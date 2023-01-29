import React from 'react'
import {useGlobalContext} from "../context/context" // costum Hook umuzu import ediyoruz.
import logo from "../helper/logo.jpg" // logomozu import ediyoruz.

import {FaBars} from "react-icons/fa"

const Navbar = () => {
    const {openSidebar,openModal,closeModal} = useGlobalContext()


    const displaySubmenu = (e) =>{
      const page = e.target.textContent;
      const tempBtn = e.target.getBoundingClientRect()
      const center = (tempBtn.left + tempBtn.right)/2
      const bottom = tempBtn.bottom-3;
       console.log(tempBtn)
      openModal(page,{center,bottom})
    }

    const handleSubmenu = (e)=>{
      if(!e.target.classList.contains('link-btn')){
        closeModal()
      }

    }
  return (
    <nav className="nav" onMouseOver = {handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Ürünlerimiz
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Geliştirdiklerimiz
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Şirketimiz
            </button>
          </li>
        </ul>
        <div>
          {" "}
          <button className="btn signin-btn">Giriş Yap </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar