import api from "../../services/api.js";
import { Background } from "./styles.js";
import { useState } from "react";

export default function Home() {
	const [movie, setMovie] = useState()

	async function getMovies() {
		const data = await api.get("/movie/popular");
		setMovie(data.data.results[0])
		console.log(movie);
	}
	getMovies();

	return (
		<Background img="https://image.tmdb.org/t/p/original/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg">
			<h1>{movie.title}</h1>
		</Background>
	);
}
