import {useState, useEffect} from 'react';


function DailyForecast(props){
	
	// simulated data; tempData.daily = [15, 10, 15, 20, 22, 20, 18];
	let dailyData = props.tempData.daily;

	return(
		<div className="daily-card">

			{!dailyData && (<h5>Loading the daily temperatures...</h5>)}

			{dailyData && (<h5>Here are the daily temperatures for the next 7 days:</h5>)}
			
			<div className="mini-group">
				{
					dailyData.map( (dailyData)=>{
						return(
							<div className="daily-mini">
								<h5>{dailyData} °C</h5>
							</div>
						)
				})
				}
			</div>

		</div>
	)
}

export default DailyForecast;