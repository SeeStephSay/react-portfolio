import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title       : 'Stephanie Butenhof',
			// Array of objects
			headerLinks : [
				{ title: 'Home', path: '/' },
				{ title: 'About', path: '/about' },
				{ title: 'Contact', path: '/contact' },
			],
			home        : {
				title     : 'Be Relentless FOR EXAMPLE',
				subTitle  : 'Projects that make a difference FOR EXAMPLE',
				paragraph : 'Check out my projects below:',
			},
			about       : {
				title : 'About Me',
			},
			contact     : {
				title : "Let's talk!",
			},
		};
	}

	render() {
		return (
      <Router>
        <Container fluid={true}>

        </Container>
      </Router>
    )
	}
}

export default App;
