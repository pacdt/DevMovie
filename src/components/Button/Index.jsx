import { RedButton, WhiteButton } from "./styles";
export default function Button({ children, red }) {
	return (
		<>
			{red ? (
				<RedButton>{children}</RedButton>
			) : (
				<WhiteButton>{children}</WhiteButton>
			)}
		</>
	);
}
