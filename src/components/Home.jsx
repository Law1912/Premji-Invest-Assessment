import React from "react";
import styled from "styled-components";
import Main from "./Main";
import Right from "./Right";

const Container = styled.div`
	max-width: 100%;
	background-color: #f3f3f3;
`;

const Content = styled.div`
	max-width: 1128px;
	margin: auto;
`;

const Layout = styled.div`
	display: grid;
	grid-template-areas: "main right";
	grid-template-columns: minmax(0, 12fr) minmax(300px, 7fr);
	column-gap: 25px;
	row-gap: 25px;
	margin: 25px 0;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		padding: 0 5px;
	}
`;

function Home() {
	return (
		<Container>
			<Content>
				<Layout>
					<Main />
					<Right />
				</Layout>
			</Content>
		</Container>
	);
}

export default Home