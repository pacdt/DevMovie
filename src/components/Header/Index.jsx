import Logo from "../../assets/logo.png";
import { Menu, Image, Itens } from "./style";

export default function Header() {
	return (
		<Menu>
            <Image>
			<img src={Logo} alt="Logo DevMovies" style={{ width: 300 }} />
            </Image>
            <Itens>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/filmes">Filmes</a></li>
                    <li><a href="/series">Séries</a></li>
                </ul>
            </Itens>
		</Menu>
	);
}
