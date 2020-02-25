import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
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
				{/* p-0 = Padding: 0 */}
				<Container className='p-0' fluid={true}>
					<Navbar className='border-bottom' bg='transparent' expand='lg'>
						<Navbar.Brand>Stephanie Butenhof</Navbar.Brand>
						{/* border-0 gets rid of border around the hamburger menu */}
						<Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
						<Navbar.Collapse id='navbar-toggle'>
							{/* 'ml-auto' = margin-left: auto; */}
							<Nav className='ml-auto'>
								{/* React Router used here for links */}
								<Link className='nav-link' to='/'>
									Home
								</Link>
								<Link className='nav-link' to='/about'>
									About
								</Link>
								<Link className='nav-link' to='/contact'>
									Contact
								</Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</Container>
			</Router>
		);
	}
}

export default App;
