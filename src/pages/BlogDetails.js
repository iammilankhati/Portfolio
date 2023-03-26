import React, { useEffect } from 'react';

const BlogDetails = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<h1>Blog Details</h1>
		</div>
	);
};

export default BlogDetails;
