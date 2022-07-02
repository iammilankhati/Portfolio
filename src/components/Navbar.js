import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { links } from "./Data";
const Navbar = () => {
	const [value, setValue] = useState(0);
	return (
		<Router>
			<nav>
				<ul>
					{links.map((item) => {
						return (
							<li className='' key={item.id} onClick={() => setValue(item.id)}>
								<Link
									to={item.link}
									className={`${value === item.id && "active-btn"}`}>
									{item.text}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</Router>
	);
};

export default Navbar;

// {`${value === item.id && "active"}`}
