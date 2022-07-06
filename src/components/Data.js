import { MdSpeed } from "react-icons/md";
import { BiDesktop } from "react-icons/bi";
import { FaLightbulb } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import projectImage from "../assets/images/img-1.jpg";
import projectImage1 from "../assets/images/img-2.jpg";

export const Features = [
	{
		id: 1,
		icon: <MdSpeed />,
		name: "Fast",
		text: "Fast load times and lag free interaction, my highest priority.",
	},
	{
		id: 2,
		icon: <BiDesktop />,
		name: "Responsive",
		text: "Fast load times and lag free interaction, my highest priority.",
	},
	{
		id: 3,
		icon: <FaLightbulb />,
		name: "Intuitive",
		text: "Fast load times and lag free interaction, my highest priority.",
	},
	{
		id: 4,
		icon: <IoIosRocket />,
		name: "Dynamic",
		text: "Fast load times and lag free interaction, my highest priority.",
	},
];
export const Skills = [
	{ id: 1, skill: "CSS", percentage: 90 },
	{ id: 2, skill: "HTML", percentage: 90 },
	{ id: 3, skill: "React", percentage: 85 },
	{ id: 4, skill: "Javascript", percentage: 85 },
	{ id: 5, skill: "Node.js", percentage: 90 },
	{ id: 6, skill: "Python", percentage: 85 },
	{ id: 7, skill: "Django", percentage: 85 },
	{ id: 8, skill: "MySQL", percentage: 85 },
	{ id: 9, skill: "Mongodb", percentage: 90 },
	{ id: 10, skill: "Figma", percentage: 85 },
	{ id: 11, skill: "Photoshop", percentage: 80 },
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
		image: projectImage,
		name: "project name",
		category: "JAVASCRIPT",
		technologies: "rect/django",

		model: {
			image1: projectImage,
			image2: projectImage,
			image3: projectImage,
			name: "project name",
			work: "main work here",
			desc: "desc of project",
			visit: "https://www.google.com",
		},
	},
	{
		id: 2,
		image: projectImage,
		name: "project name",
		category: "PYTHON/DJANGO",
		technologies: "rect/django",

		model: {
			image1: projectImage,
			image2: projectImage1,
			image3: projectImage,
			name: "project name",
			work: "main work here",
			desc: "desc of project",
			visit: "https://www.google.com",
		},
	},
	{
		id: 3,
		image: projectImage1,
		name: "project name",
		category: "PYTHON/DJANGO",
		technologies: "rect/django",

		model: {
			image1: projectImage1,
			image2: projectImage1,
			image3: projectImage,
			name: "project name",
			work: "main work here",
			desc: "desc of project",
			visit: "https://www.google.com",
		},
	},
	{
		id: 4,
		image: projectImage,
		name: "projectname",
		category: "mern-stack",
		technologies: "rect/django",
		model: {
			image1: projectImage1,
			image2: projectImage,
			image3: projectImage1,
			name: "project name",
			work: "main work here",
			desc: "desc of project",
			visit: "https://www.google.com",
		},
	},
	{
		id: 5,
		image: projectImage1,
		name: "projectname",
		category: "MERN-STACK",
		technologies: "rect/django",
		model: {
			image1: projectImage,
			image2: projectImage1,
			image3: projectImage,
			name: "project name",
			work: "main work here",
			desc: "desc of project",
			visit: "https://www.google.com",
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
		image: projectImage,
		title: "title of blog",
		date: `${
			month[new Date().getMonth()]
		}${" "}${new Date().getDay()}, ${new Date().getFullYear()}`,
		content: `Lorizzle ipsizzle dolor phat amet, consectetuer adipiscing elizzle. We gonna chung sapizzle velit, dang shizzle my nizzle crocodizzle, gangster quis, gravida vizzle, arcu. Ghetto i'm in the shizzle tortor. Crunk ghetto. izzle dolizzle dapibizzle turpis tempus crazy. Maurizzle bizzle nibh phat turpis. Rizzle izzle fo shizzle. Sheezy eleifend rhoncizzle shizzle my nizzle crocodizzle. In dizzle habitasse platea dictumst. Fizzle dapibizzle. Curabitur tellus urna, pretizzle eu, mattizzle ac, eleifend vitae, nunc. The bizzle suscipizzle. Integer sempizzle velizzle ass break yo neck, yall.`,
	},
	{
		id: 2,
		image: projectImage1,
		title: "title of blog",
		date: `${
			month[new Date().getMonth()]
		}${" "}${new Date().getDay()}, ${new Date().getFullYear()}`,
		content: `Lorizzle ipsizzle dolor phat amet, consectetuer adipiscing elizzle. We gonna chung sapizzle velit, dang shizzle my nizzle crocodizzle, gangster quis, gravida vizzle, arcu. Ghetto i'm in the shizzle tortor. Crunk ghetto. izzle dolizzle dapibizzle turpis tempus crazy. Maurizzle bizzle nibh phat turpis. Rizzle izzle fo shizzle. Sheezy eleifend rhoncizzle shizzle my nizzle crocodizzle. In dizzle habitasse platea dictumst. Fizzle dapibizzle. Curabitur tellus urna, pretizzle eu, mattizzle ac, eleifend vitae, nunc. The bizzle suscipizzle. Integer sempizzle velizzle ass break yo neck, yall.`,
	},
	{
		id: 3,
		image: projectImage,
		title: "title of blog",
		date: `${
			month[new Date().getMonth()]
		}${" "}${new Date().getDay()}, ${new Date().getFullYear()}`,
		content: `Lorizzle ipsizzle dolor phat amet, consectetuer adipiscing elizzle. We gonna chung sapizzle velit, dang shizzle my nizzle crocodizzle, gangster quis, gravida vizzle, arcu. Ghetto i'm in the shizzle tortor. Crunk ghetto. izzle dolizzle dapibizzle turpis tempus crazy. Maurizzle bizzle nibh phat turpis. Rizzle izzle fo shizzle. Sheezy eleifend rhoncizzle shizzle my nizzle crocodizzle. In dizzle habitasse platea dictumst. Fizzle dapibizzle. Curabitur tellus urna, pretizzle eu, mattizzle ac, eleifend vitae, nunc. The bizzle suscipizzle. Integer sempizzle velizzle ass break yo neck, yall.`,
	},
	{
		id: 4,
		image: projectImage1,
		title: "title of blog",
		date: `${
			month[new Date().getMonth()]
		}${" "}${new Date().getDay()}, ${new Date().getFullYear()}`,
		content: `Lorizzle ipsizzle dolor phat amet, consectetuer adipiscing elizzle. We gonna chung sapizzle velit, dang shizzle my nizzle crocodizzle, gangster quis, gravida vizzle, arcu. Ghetto i'm in the shizzle tortor. Crunk ghetto. izzle dolizzle dapibizzle turpis tempus crazy. Maurizzle bizzle nibh phat turpis. Rizzle izzle fo shizzle. Sheezy eleifend rhoncizzle shizzle my nizzle crocodizzle. In dizzle habitasse platea dictumst. Fizzle dapibizzle. Curabitur tellus urna, pretizzle eu, mattizzle ac, eleifend vitae, nunc. The bizzle suscipizzle. Integer sempizzle velizzle ass break yo neck, yall.`,
	},
];

export const social = [
	{ id: 1, icon: <FaFacebook />, link: "https://www.facebook.com" },
	{ id: 2, icon: <FaLinkedin />, link: "https://www.linkedin.com" },
	{ id: 3, icon: <FaInstagram />, link: "https://www.instagram.com" },
	{ id: 4, icon: <FaGithub />, link: "https://www.github.com" },
];
