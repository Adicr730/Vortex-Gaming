import React, {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {loadGames} from "../actions/gamesAction";
//components
import Game from "../components/game";
import GameDetail from "../components/GameDetail";
//styling
import styled from "styled-components";
import {motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import {fadeIn} from "../animation";

import bg from "../img/bg.jpg";

import {useLocation} from "react-router-dom";

const Home = () => {
	//current location
	const location = useLocation();
	const pathId = location.pathname.split("/")[2];
	//FETCH GAMES
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(loadGames());
	}, [dispatch]);
	//GET DATA BACK FROM STATE
	const {popular,upcoming, newGames, searched } = useSelector((state) => state.games);
	return (
		<GameList variants={fadeIn} initial="hidden" animate = "show">
		<AnimateSharedLayout type="crossfade">
		<AnimatePresence>
		{pathId && <GameDetail pathId={pathId}/>}
		</AnimatePresence>
		{searched.length ? (
		<div className="searched">
			<h2>Search Results:</h2>
			<Games>
				{searched.map(game => (
					<Game 
					name={game.name} 
					released={game.released} 
					id={game.id}
					image={game.background_image}
					key={game.id}
					/>
				))}
			</Games>
		</div>
		) : ""}	

			<h2>Upcoming Games</h2>
			<Games>
				{upcoming.map(game => (
					<Game 
					name={game.name} 
					released={game.released} 
					id={game.id}
					image={game.background_image}
					key={game.id}
					/>
				))}
			</Games>

			<h2>Popular Games</h2>
			<Games>
				{popular.map(game => (
					<Game 
					name={game.name} 
					released={game.released} 
					id={game.id}
					image={game.background_image}
					key={game.id}
					/>
				))}
			</Games>

			<h2>New Games</h2>
			<Games>
				{newGames.map(game => (
					<Game 
					name={game.name} 
					released={game.released} 
					id={game.id}
					image={game.background_image}
					key={game.id}
					/>
				))}
			</Games>
		</AnimateSharedLayout>
		</GameList>
		);
};

const GameList = styled(motion.div)`
	padding:8rem 5rem;
	background: url(${bg}) no-repeat center center fixed;
		-webkit-background-size: cover;
	    -moz-background-size: cover;
	    -o-background-size: cover;
	    background-size: cover;
	h2{
		padding:1rem 0rem 0rem 0rem;
	}
`;

const Games = styled(motion.div)`
	min-height:80vh;
	display:grid;
	padding : 0rem 0rem 2rem 0rem;
	grid-template-columns: repeat(auto-fit,minmax(500px,1fr));
	grid-column-gap:2rem;
	grid-row-gap:4rem;
`;

export default Home;