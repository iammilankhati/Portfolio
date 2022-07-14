import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Landing = () => {
	return (
		<section className='landing' id='landing'>
			<div className='landing__content'>
				<h1 className='landing__content--greet'>
					Hi, I'm <span className='landing__content--name'>Milan Khati</span>.
				</h1>
				<h1 className='landing__content--title'>
					I'm a full-stack web developer.
				</h1>
				<Router>
					<Link to='#about' className='call_to_action'>
						<button>
							View my work <AiOutlineArrowRight className='arrow-right' />
						</button>
					</Link>
				</Router>
			</div>
		</section>
	);
};

export default Landing;
