import api from "../../services/api.js";
import { Background, Info, Poster, Container, ContainerButton } from "./styles.js";
import { useState, useEffect } from "react";
import Button from "../../components/Button/Index.jsx";

export default function Home() {
	const [movie, setMovie] = useState();
	useEffect(() => {
		async function getMovies() {
			const {
				data: { results },
			} = await api.get("/movie/popular");
			setMovie(results[0]);
		}
		getMovies();
	}, []);

	return (
		<>
			{movie && (
				<Background
					img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
					<Container>
						<Info>
							<h1>{movie.title}</h1>
							<p>{movie.overview}</p>
							<ContainerButton>
								<Button red>Assistir Agora</Button>
								<Button>Assistir ao Trailer</Button>
							</ContainerButton>
						</Info>
						<Poster>
							<img
								src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
								alt="capa do filme"
							/>
						</Poster>
					</Container>
				</Background>
			)}
		</>
	);
}
