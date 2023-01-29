import { useState, createContext, useContext } from "react";
import sublinks from "../helper/data";

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page:"", links:[]})

    const openSidebar = ()=> {
        setSidebarOpen(true);
    }

      const closeSidebar = () => {
        setSidebarOpen(false);
      };

    const openModal = (text,coordinates) => {
      const page = sublinks.find((link)=> link.page ===text);
      setPage(page);
          setLocation(coordinates);
          setModalOpen(true);
        };

    const closeModal = () => {
          setModalOpen(false);
        };

    return (
      <AppContext.Provider
        value={{
          sidebarOpen,
          openSidebar,
          closeSidebar,
          modalOpen,
          openModal,
          closeModal,
          page,
          location,
        }}
      >
       
        {children}
      </AppContext.Provider>
    );
};

export default AppProvider

// yaptığımız contexti useContext Hook ile custom hook olarak tanımlıyoruz.
// Hook lar mutlaka use ile başlar yoksa çalışmaz.
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export { AppContext, AppProvider };