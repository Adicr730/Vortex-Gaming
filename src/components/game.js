import React from "react";
//styling
import styled from "styled-components";
import {motion} from "framer-motion";
import {popup} from "../animation";
//Redux
import {useDispatch} from "react-redux";
import {loadDetail} from "../actions/detailsAction";

import {Link} from "react-router-dom";

import {smallImg} from "../util";

const Game= ({name,released,image,id}) =>{
	const stringPathId = id.toString();
	//Load details
	const dispatch = useDispatch();
	const loadHandler = () =>{
		document.body.style.overflow="hidden";
		dispatch(loadDetail(id));
	}
	return(
		<StyledGame variants={popup} initial="hidden" animate = "show" layoutId={stringPathId} onClick={loadHandler}>
		<Link to={`/game/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
			<motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
			<p>{released}</p>
			<motion.img layoutId={`image ${stringPathId}`} src={smallImg(image,640)} alt={name}/> 
		</Link>
		</StyledGame>
		);
};

const StyledGame = styled(motion.div)`
	min-height:30vh;
	background:linear-gradient(to right bottom,rgba(255,255,255,0), rgba(255,255,255,0.4));
	box-shadow: 10px 10px 40px rgba(00,00,00,.9);
	backdrop-filter:blur(0.5rem);
	text-align:center;
	border-radius:1rem;
	cursor:pointer;
	overflow:hidden;
	img{
		width:100%;
		height:40vh;
		object-fit:cover;
		box-shadow: 0px 0px 40px rgba(0,0,0,.4);
	}
`;

export default Game;