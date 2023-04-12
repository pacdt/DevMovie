import api from "../../services/api.js";
import { Background } from "./styles.js";
import { useState, useEffect } from "react";

export default function Home() {
	const [movie, setMovie] = useState();
	useEffect(() => {
		async function getMovies() {
			const {
				data: { results }
			} = await api.get("/movie/popular");
			setMovie(results[0]);
		}
		getMovies();
	}, []);

	return (
		<>
			{movie && (
				<Background img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
					<h1>{movie.title}</h1>
					<p>{movie.overview}</p>
				</Background>
			)}
		</>
	);
}
