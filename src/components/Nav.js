import React,{useState} from "react";

import styled from "styled-components";
import {motion} from "framer-motion";
import logo from "../img/logo.svg";

import {fadeIn} from "../animation";
//REDUX AND ROUTES
import {fetchSearch} from "../actions/gamesAction";
import {useDispatch} from "react-redux";

const Nav = () => {
	const dispatch=useDispatch();
	const [textInput,setTextInput] = useState("");

	const inputHandler = (e) => {
		setTextInput(e.target.value);
	}
	const submitSearch = (e) =>{
		e.preventDefault();
		dispatch(fetchSearch(textInput));
		setTextInput("");
	}
	const clearSearched = () => {
		dispatch({type:"CLEAR_SEARCHED"});
	}

	return(
		<StyledNav variants={fadeIn} initial="hidden" animate = "show">
			<Logo onClick={clearSearched}>
				<img src={logo} alt="logo"/>
				<h1>The Vortex</h1>
			</Logo>
			<form className="search">
				<input value={textInput} onChange={inputHandler} type="text"/>
				<button type="submit" onClick={submitSearch}>Search</button>
			</form>
		</StyledNav>
	);
};

const StyledNav = styled(motion.nav)`
	padding:0rem 5rem 1rem 5rem;
	text-align:center;
	background:linear-gradient(to right bottom,rgba(255,255,255,0.04), rgba(255,255,255,0.2));
	box-shadow: 0px 0px 40px rgba(00,00,00,.9);
	backdrop-filter:blur(0.8rem);
	position:fixed;
	z-index:10;
	width:100%;
	input{
		width:30%;
		font-size:1rem;
		padding:0.5rem;
		border:none;
		border-radius:1rem;
		background:linear-gradient(to right top,rgba(255,255,255,0.04), rgba(255,255,255,0.2));
		box-shadow: 0px 0px 40px rgba(00,00,00,.9);
		outline:none;
		font-family: 'Montserrat', sans-serif;
		color : ghostwhite;
		}
	button{
		font-size:1rem;
		border:none;
		padding:0.5rem;
		border-radius:1rem;
		margin-left:1rem;
		background:linear-gradient(to right top,rgba(255,255,255,0.03), rgba(255,255,255,0.2));
		box-shadow: 0px 0px 40px rgba(00,00,00,.9);
		outline :none;
		width:7%;
		cursor:pointer;
		color:ghostwhite;
	}
`;

const Logo = styled(motion.div)`
	display:flex;
	justify-content:center;
	align-items:center;
	padding:0rem;
	cursor:pointer;
	img{
		height :3.2rem;
		width:3.2rem;
		margin: 0rem 1rem;
		filter:invert(0.9);
	}
	h1{
		font-size:2rem;
		font-weight:bold;
	}
`;

export default Nav;