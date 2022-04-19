import { useState, useEffect, createContext } from "react";
import axios from "axios";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  
  const [categoria, setCagoria] = useState("general");
  const [noticias, setNoticias] = useState([]);
  const [paginas, setPaginas] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  const consultarApi = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
      const { data } = await axios(url);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
    } catch (error) {
      return(error);
    }
  }

  useEffect(() => {
    consultarApi();
  }, [categoria])
  

  const hanldeChangeCategoria = e => {
    setCagoria(e.target.value);
  }

	return (
    <NoticiasContext.Provider value={{
      categoria,
      hanldeChangeCategoria,
      noticias,
    }}>
      {children}
    </NoticiasContext.Provider>
	);
};

export {NoticiasProvider};

export default NoticiasContext;
