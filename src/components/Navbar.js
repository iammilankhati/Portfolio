import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { links } from './Data';
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
	const [value, setValue] = useState(0);
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);
	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = '0px';
		}
	}, [showLinks]);

	return (
		<nav>
			<div className='bars' onClick={() => setShowLinks(!showLinks)}>
				<FaBars className='bars__icon' />
			</div>
			<div className='navLinks' ref={linksContainerRef}>
				<ul ref={linksRef}>
					{links.map((item) => {
						return (
							<li className='' key={item.id} onClick={() => setValue(item.id)}>
								<Link
									to={item.link}
									className={`${value === item.id && 'active-btn'}`}
								>
									{item.text}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

// {`${value === item.id && "active"}`}
