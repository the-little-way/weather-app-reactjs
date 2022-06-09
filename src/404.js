import { Link } from 'react-router-dom';

const function NotFound(){
	return(
		<section>
		    <div className="container" style={{padding-top: "20rem"; text-align: "center"; padding-bottom: "20rem";}}>
				<h1 style={{font-size: "10rem"; font-weight: "700";c olor: "grey"}}>Oops!</h1>
				<small>404 Error</small>
				<p>Sorry, page not found.</p>
				<Link to="/" role="button" className="btn btn-primary">Click here to go back</Link>
			</div>
		</section>
	)
}

export default NotFound;