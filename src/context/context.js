import { useState, createContext, useContext } from "react";

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(true);

    const openSidebar = ()=> {
        setSidebarOpen(true);
    }

      const closeSidebar = () => {
        setSidebarOpen(false);
      };

    const openModal = () => {
          setModalOpen(true);
        };

    const closeModal = () => {
          setModalOpen(false);
        };


    return (
      <AppContext.Provider
        value={{
          sidebarOpen,
          modalOpen,
          openSidebar,
          closeSidebar,
          openModal,
          closeModal,
        }}
      >
        {" "}
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