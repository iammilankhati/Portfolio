import React, { useEffect } from "react";
import myphoto from "../assets/images/img-2.jpg";
import Aos from "aos";
import { blogs } from "../components/Data";
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
							<div className='blog' key={blog.id}>
								<div className='image'>
									<img src={blog.image} alt='' />
								</div>
								<h2 className='blog_title'>{blog.title}</h2>
								<p className='blog_date'>{blog.date}</p>
								<div className='underline hr'></div>
								<p className='blog_content'>{blog.content.substring(0, 100)}</p>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default Blog;
