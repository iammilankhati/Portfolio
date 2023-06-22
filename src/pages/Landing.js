import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import { FaGithubSquare, FaLinkedin, FaMailBulk } from 'react-icons/fa';
const Landing = () => {
	return (
		<section className='landing' id='landing'>
			<div className='landing__content'>
				<div className='social-links'>
					<ul className='links-wrapper'>
						<li className='links-item'>
							<a
								href='https://github.com/iammilankhati?tab=repositories'
								target='_blank'
								rel='noreferrer'
							>
								{' '}
								<FaGithubSquare className='social-icon' />
							</a>
						</li>
						<li className='links-item'>
							<a
								href='https://www.linkedin.com/in/milan-khati-376a59198/'
								target='_blank'
								rel='noreferrer'
							>
								{' '}
								<FaLinkedin className='social-icon' />
							</a>
						</li>
						<li className='links-item'>
							<a
								href='mailto:milankc4860@gmail.com'
								target='_blank'
								rel='noreferrer'
							>
								{' '}
								<FaMailBulk className='social-icon' />
							</a>
						</li>
					</ul>
				</div>
				<h1 className='landing__content--greet'>
					Hello, I'm{' '}
					<span className='landing__content--name'>
						<h3 style={{ display: 'inline' }}>Milan Khati.</h3>
					</span>
				</h1>
				<h1 className='landing__content--title'>
					I'm a Software Engineer.
				</h1>

				<Link to='#about' className='call_to_action'>
					<button>
						View my work <AiOutlineArrowRight className='arrow-right' />
					</button>
				</Link>
			</div>
		</section>
	);
};

export default Landing;
