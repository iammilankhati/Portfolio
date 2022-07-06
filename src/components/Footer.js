import React, { useEffect } from "react";
import { social } from "./Data";
import Aos from "aos";
import { HiChevronDoubleUp } from "react-icons/hi";

const Footer = () => {
	useEffect(() => {
		Aos.init({
			duration: 2000,
		});
	}, []);

	const scrollToTop = () => {};
	return (
		<div className='wrapper-footer'>
			<section className='footer'>
				<ul>
					{social.map((item) => {
						return (
							<li key={item.id}>
								<a href={item.link}>{item.icon}</a>
							</li>
						);
					})}
				</ul>
				<article>
					<p>MILAN KHATI</p>
					<span> &copy;2022</span>
				</article>

				<div className='scroll-to-top' onClick={scrollToTop}>
					<HiChevronDoubleUp />
				</div>
			</section>
		</div>
	);
};

export default Footer;
