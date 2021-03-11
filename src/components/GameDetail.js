import React from "react";
//styling
import styled from "styled-components";
import {motion} from "framer-motion";
import {fadeIn} from "../animation";
//REDUX
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import {smallImg} from "../util";
//Images
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import windows from "../img/windows.svg";
import xbox from "../img/xbox.svg";

const GameDetail = ({pathId}) => {
	const history= useHistory();
	//exit detail
	const exitDetailHandler = (e) => {
		const element=e.target;
		if(element.classList.contains("shadow")){
			document.body.style.overflow = "auto";
			history.push("/");
		}
	};
	//Icons Function
	const getPlatform = (platform) => {
		switch(platform){
			case "PlayStation 4":
				return playstation;
			case "Xbox One":
				return xbox;
			case "PC":
				return windows;
			case "Nintendo Switch":
				return nintendo;
			case "iOS":
				return apple;
			case "Steam":
				return steam;
			default:
				return gamepad;
		}
	}

	//Data
	const {ss,game,isLoading} = useSelector((state) => state.detail);
	return(
		<>
		{!isLoading && (
		<CardShadow className="shadow" onClick={exitDetailHandler}>
			<Detail layoutId={pathId}>
				<Stats>
					<div className="rating">
						<motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
						<p>Rating : {game.rating}</p>
					</div>
					<Info>
						<h3>Platforms :</h3>
						<Platforms>
							{game.platforms.map((data) =>(
								<img alt={data.platform.name} key={data.platform.id} src={getPlatform(data.platform.name)} ></img>
							))}
						</Platforms>
					</Info>
				</Stats>
				<Media>
					<motion.img layoutId={`image ${pathId}`} src={smallImg(game.background_image,1280)} alt="bg1"/>
				</Media>
				<Description variants={fadeIn} initial="hidden" animate = "show" exit="exit">
					<p>{game.description_raw}</p>
				</Description>
				<motion.div className="gallery" variants={fadeIn} initial="hidden" animate = "show" exit="exit">
					{ss.results.map(ss => (
						<img src={smallImg(ss.image,1280)} alt="ss" key={ss.id}/>
					))}
				</motion.div>
			</Detail>
		</CardShadow>
		)}
		</>
	);
};

const CardShadow = styled(motion.div)`
	width:100%;
	min-height:100vh;
	overflow-y:scroll;
	position:fixed;
	top:0;
	left:0;
	z-index:15;
	&::-webkit-scrollbar{
		width:1rem;
	}
	&::-webkit-scrollbar-thumb{
		background:linear-gradient(to top right,rgba(255,255,255,0.1), rgba(255,255,255,0.4));
		backdrop-filter:blur(0.5rem);
		border-radius:1rem;
	}
	&::-webkit-scrollbar{
		width:0.5rem;
	}
`;

const Detail = styled(motion.div)`
	width:75%;
	border-radius:1rem;
	margin-top:2rem;
	padding:2rem 8rem;
	background:linear-gradient(to right bottom,rgba(255,255,255,0.04), rgba(255,255,255,0.4));
	box-shadow: 10px 10px 40px rgba(00,00,00,.9);
	backdrop-filter:blur(1rem);
	position:absolute;
	left:12.5%;
	top:4%;
	img{
		width:100%;
		box-shadow: 0px 0px 50px rgba(0,0,0,.9);
		border-radius:1rem;
	}
`;

const Stats = styled(motion.div)`
	display:flex;
	align-items:center;
	width:110%;
	justify-content :space-between;
`;

const Info = styled(motion.div)`
	display:flex;
	flex-direction:column;
	align-items:center;
	align-text:center;
`;

const Platforms = styled(motion.div)`
	display:flex;
	width:50%;
	justify-content:center;
	padding:0;
	margin:0;
	img{
		box-shadow: none;
		max-height:2rem;
		padding:0;
		filter:invert(0.9);
	}
`;

const Media = styled(motion.div)`
	margin-top:3rem;
	img{
		width:100%;
	}
`;

const Description = styled(motion.div)`
	margin:5rem 0rem;
	padding:1rem;
	background:linear-gradient(to right bottom,rgba(255,255,255,0.4), rgba(255,255,255,0.9));
	box-shadow: 0px 0px 80px rgba(0,0,0,.9);
	backdrop-filter:blur(2rem);
	border-radius:1rem;
	p{
		padding:0;
		font-size:1.1rem;
		font-family: 'Montserrat', sans-serif;
		font-weight:lighter;
		color:rgba(0,0,0,1);
		line-height:160%;
	}
`;

export default GameDetail;