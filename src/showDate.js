import './App.css';
import {useState} from 'react';


function ShowDate(){
	
	let currentTime = new Date()
	let today = currentTime.toDateString()

	//let [time, setTime] = useState("time")
	//( ()=> {
	//	time = currentTime.toLocaleTimeString();
	//	setTime(time)
	//},1000);
	//let dateFormat = {date: "short", day: "numeric", month:"long", year:"numeric"}
	//let today = currentTime.toLocaleString("en-US", dateFormat);

	return (
		<center className="time-top">
			<p>{today}</p>
		</center>
	)
}

export default ShowDate