import React, { useEffect, useState } from "react";
import { social } from "./Data";
import Aos from "aos";
import { HiChevronDoubleUp } from "react-icons/hi";

const Footer = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		Aos.init({
			duration: 900,
		});
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
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

				{showTopBtn && (
					<div className='scroll-to-top' onClick={scrollToTop}>
						<HiChevronDoubleUp />
					</div>
				)}
			</section>
		</div>
	);
};

export default Footer;
