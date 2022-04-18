import { Grid, Typography } from "@mui/material";
import Noticia from "./Noticia";
import useNoticias from "../hook/useNoticias"

const ListadoNoticias = () => {

  const { noticias } = useNoticias();

  return (
    <>
      <Typography textAlign={"center"} marginY={5} component="h2" variant="h3">Últimas Noticias</Typography>
      <Grid container spacing={2}>
        {noticias.map(noticia => (
          <Noticia key={noticia.url} noticia={noticia} />
        ))}
      </Grid>
    </>
  )
}

export default ListadoNoticias