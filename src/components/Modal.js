import React, { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
const Modal = ({ data, modalState, setModalState }) => {
	const { image1, image2, image3, name, work, desc, visit } = data[0].model;
	const images = [image1, image2, image3];
	const [currentImg, setCurrentImg] = useState(0);
	const closeModal = () => {
		setModalState({ ...modalState, show: !modalState.show });
	};
	return (
		<section className='modal'>
			<div className='wrapper'>
				<main className='modal_slider'>
					{images.map((image, index) => {
						return (
							<img
								key={index}
								src={image}
								alt='model'
								className={
									(currentImg > index && "nextImg") ||
									(currentImg < index && "prevImg")
								}
							/>
						);
					})}
					<div className='icons'>
						<FaChevronLeft
							className='prev'
							onClick={() => setCurrentImg(Math.abs(currentImg + 1) % 3)}
						/>
						<FaChevronRight
							className='next'
							onClick={() => setCurrentImg((currentImg + 1) % 3)}
						/>
					</div>
				</main>
				<footer className='modal_footer'>
					<h1 className='modal_footer--title'>{name}</h1>
					<p className='modal_footer--work'>{work}</p>
					<hr />
					<p className='modal_footer--description'>{desc}</p>
					<div className='base'>
						<button className='modal-footer--visit-site'>
							<MdOpenInNew className='open-in-new' />
							<a href={visit}>VISIT SITE</a>
						</button>
						<p>
							<FaTimes onClick={closeModal} />
						</p>
					</div>
				</footer>
			</div>
		</section>
	);
};

export default Modal;
