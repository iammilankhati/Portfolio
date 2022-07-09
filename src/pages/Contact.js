import React, { useEffect } from "react";
import Aos from "aos";
import emailjs from "@emailjs/browser";

const Contact = () => {
	useEffect(() => {
		Aos.init({
			duration: 900,
		});
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();
		alert("Your mail is sent!");
		emailjs
			.sendForm(
				"service_z9ys4mc",
				"template_7bzbmpk",
				e.target,
				"3L28mFDR-Dgcv91tE"
			)
			.then((res) => {})
			.catch((err) => {});
	};
	return (
		<div className='wrapper-contact'>
			<section className='contact' id='contact'>
				<h1 data-aos='flip-right'>
					CONTACT
					<div
						className='underline underline-contact'
						data-aos='slide-right'></div>
				</h1>

				<p className='question'>Have question or want to work together ?</p>
				<form onSubmit={sendEmail} data-aos='zoom-in'>
					<label htmlFor='name'>
						<input type='text' name='name' id='name' placeholder='Name' />
					</label>
					<label htmlFor='email'>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Enter Email'
							required
						/>
					</label>

					<label htmlFor='message'>
						<textarea
							name='message'
							id='message'
							cols='30'
							rows='10'
							placeholder='Your Message...'></textarea>
					</label>
					<button type='submit'>SUBMIT</button>
				</form>
			</section>
		</div>
	);
};

export default Contact;
