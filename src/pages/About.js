import React, { useEffect, useRef } from "react";
import { Features, Skills } from "../components/Data";
import myphoto from "../assets/images/img-2.jpg";
import ProgressBar from "../components/ProgressBar";
import Aos from "aos";

const About = () => {
	useEffect(() => {
		Aos.init({
			duration: 900,
		});
	}, []);
	return (
		<div className='wrapper-about'>
			<section className='about' id='about'>
				<h1 data-aos='flip-right'>
					ABOUT
					<div className='underline'></div>
				</h1>

				<div className='features'>
					{Features.map((feature) => {
						return (
							<div className='feature' key={feature.id} data-aos='flip-right'>
								<div className='icon'>
									<h1>{feature.icon}</h1>
								</div>
								<h2 className='feature_name'>{feature.name}</h2>
								<p className='feature_text'>{feature.text}</p>
							</div>
						);
					})}
				</div>
				<div className='me'>
					<div className='me_info'>
						<div className='me_info--image' data-aos='flip-left'>
							<img src={myphoto} alt='milankhati' className='myphoto' />
						</div>
						<h2 className='me_info--name'>Who's this guy?</h2>
						<p>
							I'm a Front-End Developer for ChowNow in Los Angeles, CA. I have
							serious passion for UI effects, animations and creating intuitive,
							dynamic user experiences.
							<a href=''>Let's make something special</a>
						</p>
					</div>
					<div className='me_skills'>
						<div className='me_skill'>
							{Skills.map((skill) => {
								return (
									<div className='me_skill--bar' key={skill.id}>
										<div className='b name_bar'>{skill.skill}</div>
										<div className='bar_cover'>
											<ProgressBar width={skill.percentage} />
										</div>

										<div className='b percentage'>{skill.percentage}%</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
