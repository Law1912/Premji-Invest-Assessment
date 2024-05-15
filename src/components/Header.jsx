import React from "react";
import styled, {css} from "styled-components";
import { AiFillHome } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';

const Container = styled.div`
	background-color: #f3f3f3;
	border-bottom: 1px solid rgba(0, 0, 0, 0.08);
	padding: 0 24px;
	position: sticky;
	top: 0;
	left: 0;
	/* width: 100vw; */
	z-index: 10;
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	margin: 0 auto;
	height: 100%;
	max-width: 1128px;
`;

const Logo = styled.span`
	margin-right: 8px;
	font-size: 0;
`;

const Search = styled.div`
	opacity: 1;
	flex-grow: 1;
	position: relative;
	@media (max-width: 768px) {
		flex-grow: unset;
	}
	& > div {
		max-width: 280px;
			input {
			border: none;
			box-shadow: none;
			background-color: #fff;
			border-radius: 2px;
			color: rgba(0, 0, 0, 0.9);
			width: 218px;
			padding: 0 8px 0 40px;
			line-height: 1.75;
			font-weight: 400;
			font-size: 14px;
			height: 34px;
			vertical-align: text-top;
			border-color: #dce6f1;
			@media (max-width: 768px) {
				width: 140px;
			}
		}
	}
`;

const Nav = styled.nav`
	margin-left: auto;
	display: block;
	@media (max-width: 768px) {
		position: fixed;
		left: 0;
		bottom: 0;
		background: white;
		width: 100%;
	}
`;

const NavListWrap = styled.ul`
	display: flex;
	flex-wrap: nowrap;
	list-style-type: none;
	justify-content: space-between;
	.active {
		span::after {
			content: "";
			transform: scaleX(1);
			border-bottom: 2px solid var(--white, #fff);
			position: absolute;
			left: 0;
			bottom: 0;
			transition: transform 0.2s ease-in-out;
			width: 100%;
			border-color: rgba(0, 0, 0, 0.9);
		}
	}
`;

const NavList = styled.li`
	display: flex;
	align-items: center;
	a {
		align-items: center;
		background: transparent;
		display: flex;
		flex-direction: column;
		font-size: 12px;
		font-weight: 400;
		justify-content: center;
		line-height: 1.5;
		min-height: 52px;
		min-width: 80px;
		position: relative;
		text-decoration: none;
		span {
			color: rgba(0, 0, 0, 0.6);
			display: flex;
			align-items: center;
			text-align: center;
		}
		@media (max-width: 768px) {
			min-width: 50px;
			font-size: 9px;
			span > img {
				width: 40%;
			}
		}
	}
	&:hover,
	&:active {
		a {
			span {
				color: rgba(0, 0, 0, 0.9);
			}
		}
	}
`;

const User = styled(NavList)`
	a > img {
		border-radius: 50%;
		width: 25px;
		height: 25px;
	}
	span {
		display: flex;
		align-items: center;
	}
`;


const generalIconCSS = css`
  width: 24px;
  height: 24px;
  padding: 15px;
  `;

const HomeIcon = styled(AiFillHome)`
  ${generalIconCSS}
`;
const NetworkIcon = styled(FiUsers)`
  ${generalIconCSS}
`;


function Header() {
	return (
		<Container>
			<Content>
				<HomeIcon />
				<Logo>
					{/* <a href="/"> */}
						{/* <img src="/images/home-logo.svg" alt="" /> */}
						{/* <HomeIcon /> */}
					{/* </a> */}
				</Logo>
				<Search>
					<div>
						<input type="text" placeholder="Search" />
					</div>
				</Search>
				<h3>Premji Invest</h3>
				<Nav>
					<NavListWrap>
						<NavList>
							<a href="/">
								<span>Notifications</span>
							</a>
						</NavList>
						<User>
							<a href="/">
								<span>
									Me
									<NetworkIcon />
								</span>
							</a>
						</User>
					</NavListWrap>
				</Nav>
			</Content>
		</Container>
	);
}

export default Header