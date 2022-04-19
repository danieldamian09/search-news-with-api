import { useState, useEffect, createContext } from "react";
import axios from "axios";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  
  const [categoria, setCagoria] = useState("general");
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  const consultarApi = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
      const { data } = await axios(url);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
      setPagina(1);
    } catch (error) {
      return(error);
    }
  }

  const consultarApiPages = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&page=${pagina}&apiKey=${import.meta.env.VITE_API_KEY}`;
      const { data } = await axios(url);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
    } catch (error) {
      return(error);
    }
  }

  const hanldePageChange = (e, value) => { 
    // console.log(e.target.textContent);
    setPagina(value);
  }


  useEffect(() => {
    consultarApi();
  }, [categoria])
  
  useEffect(() => {
    consultarApiPages();
  }, [pagina])
  

  const hanldeChangeCategoria = e => {
    setCagoria(e.target.value);
  }

	return (
    <NoticiasContext.Provider value={{
      categoria,
      hanldeChangeCategoria,
      noticias,
      totalNoticias,
      hanldePageChange,
      pagina,
    }}>
      {children}
    </NoticiasContext.Provider>
	);
};

export {NoticiasProvider};

export default NoticiasContext;
