import styled, {css} from "styled-components";

const buttonStyles = css`
	border: 3px solid #fff;
	background: transparent;
	color: #fff;
	border-radius: 30px;
	padding: 10px 20px;
	cursor: pointer;
	font-size: 20px;
	font-weight: 600;

	&:hover {
		color: #ff0000;
		background: #fff;
	}
`
export const WhiteButton = styled.button`
	${buttonStyles}
`;
export const RedButton = styled.button`
	${buttonStyles}
	border: 4px solid transparent;
	background: #ff0000;
	box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

	&:hover{
		box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
		background: #ff0000;
		color: #fff;
	}
`;
