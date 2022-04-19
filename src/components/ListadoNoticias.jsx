import {Grid, Typography} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Noticia from "./Noticia";
import useNoticias from "../hook/useNoticias";

const ListadoNoticias = () => {
	const {noticias} = useNoticias();

	return (
		<>
			<Typography textAlign={"center"} marginY={5} component="h2" variant="h3">
				Últimas Noticias
			</Typography>
			<Grid container spacing={2}>
				{noticias.map((noticia) => (
					<Noticia key={noticia.url} noticia={noticia} />
				))}
			</Grid>
			<Stack
				spacing={2}
				sx={{marginY: 5}}
				direction={"row"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Pagination count={10} color="primary" />
			</Stack>
		</>
	);
};

export default ListadoNoticias;
