import {useState} from 'react';

// this data would be sent from the backend to the /search route, then passed to this component via props
//let tempData = {
//		cityName : "Lisbon",
//		val : 10,
//		desc : "Clear skies",
//		daily: [],
//		hourly: []
//	};

function WeatherCard(props){
	
	let tempData = props.tempData;

	return(
		<div className="weather-card">
			<div className="weather-info">
				<h1>{tempData.val} °C</h1>
			</div>
			<div className="city-info">
				<h3>{tempData.cityName}</h3>
				<p>{tempData.desc}</p>
			</div>
		</div>
	)
}

export default WeatherCard;