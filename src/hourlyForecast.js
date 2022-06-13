import {useState, useEffect} from 'react';


function HourlyForecast(props){
	
	// simulated data; tempData.hourly = [15, 17, 13, 10, 5]
	//let data = props;
	//console.log(data)
	let hourlyData = props.tempData.hourly;
	//console.log(hourlyData, "hourly")
	
	return(
		<div className="hourly-card">

			{!hourlyData && (<h5>Loading the daily temperatures...</h5>)}

			{hourlyData && (<h5>Here are the temperatures for the next few hours:</h5>)}
			
			<div className="mini-group">
				{
					hourlyData.map( (hourlyData)=>{
						return(
							<div className="daily-mini">
								<h5>{hourlyData} °C</h5>
							</div>
						)
					})
				}
			</div>

		</div>
	)

}

export default HourlyForecast;