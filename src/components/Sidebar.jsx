import React from 'react'
import {useGlobalContext} from "../context/context" // costum Hook umuzu import ediyoruz.
import { FaTimes } from "react-icons/fa";
import sublinks from "../helper/data"

const Sidebar = () => {
 const { openSidebar, closeSidebar } = useGlobalContext();
  return (
    <div
      className={`${openSidebar ? "sidebar-wrapper" : "sidebar-wrappe show "}`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;