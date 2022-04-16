import {useState, createContext} from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  
  const [categoria, setCagoria] = useState("general");

  const hanldeChangeCategoria = e => {
    setCagoria(e.target.value);
  }

	return (
    <NoticiasContext.Provider value={{
      categoria,
      hanldeChangeCategoria,
    }}>
      {children}
    </NoticiasContext.Provider>
	);
};

export {NoticiasProvider};

export default NoticiasContext;
