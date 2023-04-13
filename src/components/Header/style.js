import styled from "styled-components";

export const Menu = styled.div`
	background: transparent;
	position: absolute;
	display: flex;
	padding: 10px 20px;
	display: flex;
	width: 100%;
	max-width: 1500px;
	color: #fff;
	justify-content: space-between;
`;
export const Image = styled.div`
	&:hover {
		cursor: pointer;
	}
`;
export const Itens = styled.div`
	display: flex;
	align-items: center;
	ul {
		display: flex;
		gap: 20px;
	}
	ul li {
		list-style: none;
        font-size: 20px;
	}
    ul li a {
        text-decoration: none;
        color: #fff;
    }
`;
