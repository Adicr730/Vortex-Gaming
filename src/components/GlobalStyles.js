import {createGlobalStyle} from "styled-components";


const GlobalStyles= createGlobalStyle`
	*{
		margin:0;
		padding:0;
		box-sizing:border-box;
	}
	html{
		&::-webkit-scrollbar{
			width:0.7rem;
			background-color:black;
		}
		&::-webkit-scrollbar-thumb{
			background:linear-gradient(rgba(215,215,215,0.2), rgba(0,0,215,1),rgba(215,215,215,0.2));
		}
	}
	body{
		background:rgb(23,23,23);
		font-family: 'Bungee Hairline', cursive;
		width:100%;
		color:ghostwhite;
	}
	h2{
		font-size:2.5rem;
	}
	h3{
		font-size:1.5rem;
		padding:1.3rem 0rem 0rem 0rem;
	}
	p{
		font-size:1rem;
		line-height:20%;
		padding:0rem 0rem 1.5rem 0rem;
		font-weight:bold;
	}
	a{
		text-decoration:none;
	}
	img{
		display:block;
	}
`;

export default GlobalStyles;