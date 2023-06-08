import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import {Context} from "../store/appContext.js"
import { Link } from "react-router-dom";
import { CardDetail } from "./cardDetails";
import { Details } from "./Details";


 
export const Home = () => {

	const {store, actions} = useContext(Context)


	return(
		<>
		<div className="container mt-4 character">
		<h1>Characters</h1>
		</div>
		{store.characters.map((character) => {
			return <CardDetail key={character.uid} item={character} endpoint="people"/>
	})}


		<div className="container mt-5 planets">
			<h1>Planets</h1>
		</div>
		{store.planets.map((planet) => {
			return <CardDetail key={planet.uid} item={planet} endpoint="planets"/>
			
		
	})}

		<div className="container mt-5 vehicles">
			<h1>Vehicles</h1>
		</div>
		{store.vehicles.map((vehicle) => {
			 return <CardDetail key={vehicle.uid} item={vehicle} endpoint="vehicles"/>
		})}
	</>
	)
	}

	
	


