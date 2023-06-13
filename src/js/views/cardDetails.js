import React, {useState, useEffect, useContext} from 'react'
import { Link } from "react-router-dom"
import tatooineImg from "../../img/tatooine.jpeg"
import propTypes from "prop-types"
import { Context } from '../store/appContext'
import "../../styles/cardDetails.css";


export const CardDetail = (props) => {

	const {store, actions} = useContext(Context)

    return(
		<div className="d-inline-flex ms-4 mx-4 ps-3 pb-3 pt-3 py-3">
		<div className="card bg-dark" style={{width: "18rem"}}>
		<img src={`${props.endpoint == "planets" && props.item.uid == 1 ? tatooineImg : `https://starwars-visualguide.com/assets/img/${props.endpoint == "people" ? "characters" : props.endpoint}/${props.item.uid}.jpg`}`} className="card-img-top" alt="..."/> 	 	<div className="card-body">
    		<h5 className="card-title text-white mb-3">{props.item.name}</h5>
			<Link to={`/${props.endpoint}/${props.item.uid}`} className="btn btn-warning">Learn more!</Link>
			<button type="button" className="btn btn-light float-end button" onClick={() => actions.addToFavorites(props.item)}><i className="far fa-heart"></i></button>
  		</div>
		</div>
		</div>
    )
}
