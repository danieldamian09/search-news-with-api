import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Link,
	Typography,
} from "@mui/material";

const Noticia = ({noticia}) => {
	const {urlToImage, url, title, description, source} = noticia;
	return (
		<Grid item sm={12} md={6} lg={4}>
			<Card>
				{urlToImage && (
					<CardMedia
						src={urlToImage || "https://via.placeholder.com/400x250"}
						alt={`Imagen de la noticia ${title}`}
						component={"img"}
						height={250}
					/>
				)}
				<CardContent>
					<Typography variant="body1" color="error">
						{source.name}
					</Typography>
					<Typography variant="h5" component="div">
						{title}
					</Typography>
					<Typography variant="body2">{description}</Typography>
				</CardContent>

				<CardActions>
					<Link
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						variant="button"
            width={"100%"}
            sx={{
              textDecoration: "none",
            }}
					>
						Leer Noticia
					</Link>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Noticia;
