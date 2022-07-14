import { MdSpeed } from "react-icons/md";
import { BiDesktop } from "react-icons/bi";
import { FaLightbulb } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import projectImage1 from "../assets/images/loginform.png";
import teach from "../assets/images/teach.png";
import fullstack from "../assets/images/fullstack.jpg";
import cocktail1 from "../assets/images/cocktail1.PNG";
import cocktail2 from "../assets/images/cocktail2.PNG";
import cocktail3 from "../assets/images/cocktail3.PNG";
import cocktail from "../assets/images/cocktail.png";
import signup from "../assets/images/signup.png";
import signuperror from "../assets/images/signuperror.png";
import signupsuccess from "../assets/images/signupsuccess.png";

export const Features = [
	{
		id: 1,
		icon: <MdSpeed />,
		name: "Fast",
		text: "Speed has always been my priority, I have knowledge, experience and technology",
	},
	{
		id: 2,
		icon: <BiDesktop />,
		name: "Responsive",
		text: "My layouts perfectly fits on any device from mobile to desktop",
	},
	{
		id: 3,
		icon: <FaLightbulb />,
		name: "Intuitive",
		text: "Strong preference for easy to use, intuitive UX/UI",
	},
	{
		id: 4,
		icon: <IoIosRocket />,
		name: "Dynamic",
		text: "Websites don't have to static, I love making pages come to life",
	},
];
export const Skills = [
	{ id: 1, skill: "CSS", percentage: 90 },
	{ id: 2, skill: "HTML", percentage: 90 },
	{ id: 3, skill: "React", percentage: 80 },
	{ id: 4, skill: "Javascript", percentage: 80 },
	{ id: 5, skill: "Node.js", percentage: 70 },
	{ id: 6, skill: "Python", percentage: 65 },
	{ id: 7, skill: "Django", percentage: 65 },
	{ id: 8, skill: "MySQL", percentage: 80 },
	{ id: 9, skill: "Mongodb", percentage: 60 },
	{ id: 10, skill: "Figma", percentage: 65 },
	{ id: 11, skill: "Photoshop", percentage: 50 },
];

export const links = [
	{
		id: 1,
		text: "Home",
		link: "#landing",
	},
	{
		id: 2,
		text: "About",
		link: "#about",
	},
	{
		id: 3,
		text: "Portfolio",
		link: "#projects",
	},
	{
		id: 4,
		text: "Blog",
		link: "#blog",
	},
	{
		id: 5,
		text: "Contact",
		link: "#contact",
	},
];
export const categorys = [
	{ id: 1, category: "ALL" },
	{ id: 2, category: "PYTHON/DJANGO" },
	{ id: 3, category: "MERN-STACK" },
	{ id: 4, category: "JAVASCRIPT" },
];
export const projects = [
	{
		id: 1,
		image: projectImage1,
		name: "project name",
		category: "JAVASCRIPT",
		technologies: "rect/django",

		model: {
			image1: signup,
			image2: signuperror,
			image3: signupsuccess,
			name: "project name",
			work: "main work here",
			desc: "desc of project",
			visit: "https://myform101.netlify.app",
		},
	},
	{
		id: 2,
		image: cocktail,
		name: "project name",
		category: "PYTHON/DJANGO",
		technologies: "rect/django",

		model: {
			image1: cocktail1,
			image2: cocktail2,
			image3: cocktail3,
			name: "project name",
			work: "main work here",
			desc: "desc of project",
			visit: "https://mydrinks101.netlify.app/",
		},
	},
	{
		id: 3,
		image: projectImage1,
		name: "project name",
		category: "PYTHON/DJANGO",
		technologies: "rect/django",

		model: {
			image1: signup,
			image2: signuperror,
			image3: signupsuccess,
			name: "project name",
			work: "main work here",
			desc: "desc of project",
			visit: "https://myform101.netlify.app",
		},
	},
	{
		id: 4,
		image: cocktail,
		name: "projectname",
		category: "mern-stack",
		technologies: "rect/django",
		model: {
			image1: cocktail1,
			image2: cocktail2,
			image3: cocktail3,
			name: "project name",
			work: "main work here",
			desc: "desc of project",
			visit: "https://mydrinks101.netlify.app/",
		},
	},
];
const month = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
export const blogs = [
	{
		id: 1,
		image: fullstack,
		title: "Journey of a Full Stack developer",
		date: `${
			month[new Date().getMonth()]
		}${" "}${new Date().getDay()}, ${new Date().getFullYear()}`,
		content: `Back end developers are responsible for creating the pathways to deliver information to and from users who operate front end interfaces. This is where full stack development comes in. “Full stack” refers to the entirety of a site or application's front and back end architecture.`,
	},
	{
		id: 2,
		image: teach,
		title: "Teach what you learn",
		date: `${
			month[new Date().getMonth()]
		}${" "}${new Date().getDay()}, ${new Date().getFullYear()}`,
		content: `The best way to learn something is to teach it. I started doing this accidentally. In 2016, I started presenting on my college classes. My presentations were not good, but I learned lots just by preparing for them.`,
	},
];

export const social = [
	{ id: 1, icon: <FaFacebook />, link: "https://www.facebook.com/Iam.ilankc" },
	{
		id: 2,
		icon: <FaLinkedin />,
		link: "https://www.linkedin.com/in/milan-khati-376a59198/",
	},
	{ id: 3, icon: <FaInstagram />, link: "https://www.instagram.com/ilan_kc/" },
	{ id: 4, icon: <FaGithub />, link: "https://github.com/iammilankhati/" },
];
