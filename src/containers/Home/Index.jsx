import api from "../../services/api.js";

export default function Home() {
	async function getMovies() {
		const data = await api.get("/movie/popular");

		console.log(data);
	}
	getMovies();
	return (
		<div>
			<h1>Home</h1>
		</div>
	);
}
