import React from 'react';
import "./style.css";

const Card = props => (
	<header 
		className="header"
		onClick={() => props.setClicked(props.id)}>
	    <div className="imgContainer">
	      <img
	      	className="img"
	        alt={props.name}
	        src={props.image}
	      />
	    </div>
	    <div className="content">	
	    	{props.name}
	    </div>
  </div>
);

export default Card;