import React, { useEffect } from "react";

const Progressbar = ({ width }) => {
	useEffect(() => {});
	return (
		<div
			className='b progress_bar'
			style={{ width: `${width}%` }}
			data-aos='rising-bar'></div>
	);
};

export default Progressbar;
