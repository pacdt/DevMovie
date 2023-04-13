import styled from "styled-components";

export const Background = styled.div`
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
		url(${(props) => props.img});
	height: 100vh;
	background-position: center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;

	/* &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5)
    } */
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    max-width: 1500px;
`;

export const Info = styled.div`
	padding: 20px;
	width: 50%;
	h1 {
		font-size: 5rem;
		font-weight: 700;
		color: #fff;
	}
	p {
		font-size: 20px;
		font-weight: 500;
		color: #fff;
		margin-bottom: 20px;
		margin-top: 30px;
	}
`;
export const Poster = styled.div`
	img {
		border-radius: 5px;
		width: 300px;
	}
`;
export const ContainerButton = styled.div`
	display: flex;
	gap: 20px;
	margin-top: 20px;
`