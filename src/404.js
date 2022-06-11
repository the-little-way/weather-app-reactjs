import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

function NotFound(){
	return(
		<section>
		    <div className="container" style={{textAlign: "center"}}>
				<h1 style={{fontSize: "10rem", fontWeight: "700", color: "grey"}}>Oops!</h1>
				<small>404 Error</small>
				<p>Sorry, page not found.</p>
				<Link to="/" role="button" className="btn btn-primary">Click here to go back</Link>
			</div>
		</section>
	)
}

export default NotFound;