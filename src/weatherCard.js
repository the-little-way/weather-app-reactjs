import {useState} from 'react';


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