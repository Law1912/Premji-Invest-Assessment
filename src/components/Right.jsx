import React from "react";
import styled, {css} from "styled-components";
import { FiUsers } from 'react-icons/fi';

const Container = styled.div`
	grid-area: right;
	@media (max-width: 768px) {
		margin-bottom: 35px;
	}
	height: calc(100vh - 135px); /* Adjust the height as needed */
    overflow-y: auto;
	padding: 5px;
`;

const Content = styled.div`
	text-align: center;
	& > img {
		width: 30px;
	}
`;

const SharedActor = styled.div`
	padding-right: 40px;
	flex-wrap: nowrap;
	padding: 12px 16px 0;
	margin-bottom: 8px;
	display: flex;
	align-items: center;
	a {
		margin-right: 12px;
		flex-grow: 1;
		overflow: hidden;
		display: flex;
		img {
			width: 48px;
			height: 48px;
			border-radius: 50%;
		}
		& > div {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			flex-basis: 0;
			margin-left: 8px;
			overflow: hidden;
			span {
				text-align: left;
				&:first-child {
					font-size: 14px;
					font-weight: 700;
					color: #000;
				}
				&:nth-child(n + 2) {
					font-size: 12px;
					color: rgba(0, 0, 0, 0.6);
				}
			}
		}
	}
	button {
		position: absolute;
		top: 0;
		right: 12px;
		border: none;
		outline: none;
		background: transparent;
	}
`;

const FollowCard = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 5px;
	border: none;
	position: relative;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
	padding: 12px;
`;

const Title = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	font-size: 16px;
	width: 100%;
	color: rgba(0, 0, 0, 0.6);
`;

const Recommendation = styled.a`
	display: flex;
	align-items: center;
	font-size: 14px;
	color: #0a66c2;
	img {
		margin-left: 5px;
	}
`;


const actors = [
	{
		title:"John Doe",
		description:"someone help me with hello world",
		date: "October 13, 2014 11:13:00",
	},

	{
		title:"Venkat",
		description:"someone help me with hello world",
		date: "October 13, 2014 11:13:00",
	},

	{
		title:"Aditya",
		description:"someone help me with hello world",
		date: "October 13, 2014 11:13:00",
	},

	{
		title:"Jasman",
		description:"someone help me with hello world",
		date: "October 13, 2014 11:13:00",
	},

	{
		title:"Abinav",
		description:"someone help me with hello world",
		date: "October 13, 2014 11:13:00",
	},

	{
		title:"Anupam",
		description:"someone help me with hello world",
		date: "October 13, 2014 11:13:00",
	},

];


const generalIconCSS = css`
  width: 24px;
  height: 24px;
  padding: 15px;
  padding-up:100px;
`;
const NetworkIcon = styled(FiUsers)`
  ${generalIconCSS}
`;


const CommonBox = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 5px;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Actor = styled(CommonBox)`
	padding: 0;
	margin: 0 0 8px;
	overflow: visible;
`;

function Right() {
	return (
		<Container>
			<FollowCard>
				<Title>
					<h2>Messages</h2>
					<img src="/images/feed-icon.svg" alt="" />
				</Title>

				<Content>
				{actors.length > 0 &&
					actors.map((actor, key) => (
						<Actor key={key}>
							<SharedActor>
								<a href="/">
									<NetworkIcon />
									<div>
										<span>{actor.title}</span>
										<span>{actor.description}</span>
										<span>{actor.date}</span>
									</div>
								</a>
							</SharedActor>
						</Actor>
				))}
				</Content>
				<Recommendation>
					View all Messages
				</Recommendation>
			</FollowCard>
		</Container>
	);
}

export default Right;
