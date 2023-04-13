import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home/Index.jsx";
import Movies from "../containers/Movies/Index.jsx";
import Series from "../containers/Series/Index.jsx";
import DefaultLayout from "../Layouts/DefaultLayout/DefaultLayout.jsx";

export default function Router() {
	return (
		<Routes>
			<Route element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/filmes" element={<Movies />} />
				<Route path="/series" element={<Series />} />
			</Route>
		</Routes>
	);
}
