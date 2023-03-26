import React, { useEffect } from 'react';
import Aos from 'aos';
import { blogs } from '../components/Data';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Blog = () => {
	useEffect(() => {
		Aos.init({
			duration: 900,
		});
	}, []);
	return (
		<div className='wrapper-blog'>
			<section className='blog' id='blog'>
				<h1 data-aos='flip-right'>
					BLOG
					<div className='underline'></div>
				</h1>

				<div className='blogs'>
					{blogs.map((blog) => {
						return (
							<div key={blog.id}>
								<Link to={`#blog/${blog.id}`} className='blog_link'>
									<div className='blog' key={blog.id}>
										<div className='image'>
											<img src={blog.image} alt='blog' />
										</div>
										<h2 className='blog_title'>{blog.title}</h2>
										<p className='blog_date'>{blog.date}</p>
										<div className='underline hr'></div>
										<p className='blog_content'>
											{blog.content.substring(0, 104)} <strong>...</strong>
										</p>
									</div>
								</Link>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default Blog;
