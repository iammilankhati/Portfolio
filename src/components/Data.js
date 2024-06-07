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
import champawoti1 from "../assets/images/champawoti-1.PNG";
import champawoti2 from "../assets/images/champawoti-2.PNG";
import champawoti3 from "../assets/images/champawoti-3.PNG";
import champawoti4 from "../assets/images/champawoti-4.PNG";

import bichardhara1 from "../assets/images/bichardhara-1.PNG";
import bichardhara2 from "../assets/images/bichardhara-2.PNG";
import bichardhara3 from "../assets/images/bichardhara-3.PNG";
import signup from "../assets/images/signup.png";
import signuperror from "../assets/images/signuperror.png";
import signupsuccess from "../assets/images/signupsuccess.png";

// easyshop

import easy1 from "../assets/easyshop/easy1.png";
import easy2 from "../assets/easyshop/easy2.png";
import easy3 from "../assets/easyshop/easy3.png";
import easy4 from "../assets/easyshop/easy4.png";
import easy5 from "../assets/easyshop/easy5.png";
import easy6 from "../assets/easyshop/easy6.png";

// gulmiunited

import united1 from "../assets/gulmiunited/united1.png";
import united2 from "../assets/gulmiunited/united2.png";
import united3 from "../assets/gulmiunited/united3.png";
import united4 from "../assets/gulmiunited/united4.png";
import united5 from "../assets/gulmiunited/united5.png";

// semesterone
import semesterone1 from "../assets/semesterone/semesterone1.png";
import semesterone3 from "../assets/semesterone/semesterone3.png";

// sneakercop
import sneaker1 from "../assets/sneakercop/sneaker1.png";
import sneaker2 from "../assets/sneakercop/sneaker2.png";
import sneaker3 from "../assets/sneakercop/sneaker3.png";
import sneaker4 from "../assets/sneakercop/sneaker4.png";
import sneaker5 from "../assets/sneakercop/sneaker5.png";

// signup

import login1 from "../assets/signup/login3.png";
import login2 from "../assets/signup/login4.png";
import login3 from "../assets/signup/login5.png";
import login4 from "../assets/signup/signup7.png";
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
  { id: 1, skill: "ReactJS", percentage: 90 },
  { id: 2, skill: "NextJS", percentage: 90 },
  { id: 3, skill: "NestjS", percentage: 70 },
  { id: 4, skill: "NodeJS", percentage: 70 },
  { id: 5, skill: "CSS/SASS/Tailwind", percentage: 80 },
  { id: 6, skill: "DB design", percentage: 70 },
  { id: 7, skill: "sql/nosql", percentage: 70 },
  { id: 8, skill: "Prisma/graphql/express", percentage: 70 },
  { id: 9, skill: "Jest/testing-library", percentage: 60 },
  { id: 10, skill: "Figma", percentage: 50 },
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
    image: champawoti2,
    name: "Finance Website",
    category: "JAVASCRIPT",
    technologies: "React/Django",

    model: {
      image1: champawoti2,
      image2: champawoti3,
      image3: champawoti1,
      name: "Finance Website",
      work: "champwotisaccos.com.np has classic navbar, It has informational header as needed. Users can upload their urgent news on popups, uploads reports, notices and share news and notices even in the slider.",
      desc: "This website build using react on front end and django on backend. It is beautiful website with easy and smooth navigations.",
      visit: "https://www.champawotisaccos.com.np",
    },
  },
  {
    id: 2,
    image: easy2,
    name: "Ecommerce WebSite",
    category: "JAVASCRIPT",
    technologies: "AngularJS",

    model: {
      image1: easy1,
      image2: easy2,
      image3: easy3,

      name: "Ecommerce Website (Not live)",
      work: "Easy shop is Ecommerce site with various features that ecommerce has filter, sorting, checkout, categorization, dynamic view , cart etc.",
      desc: "",
      visit: "",
    },
  },

  {
    id: 3,
    image: sneaker2,
    name: "Ecommerce Site",
    category: "JAVASCRIPT",
    technologies: "NextJS/React",

    model: {
      image1: sneaker1,
      image2: sneaker2,
      image3: sneaker3,
      name: "Ecommerce Site",
      work: "It is shoe Selling Site on the membership basis.",
      desc: "It has awesome design, beatiful sliders, easy navigation, easy login and resgistration",
      visit: "https://webfriend.online",
    },
  },
  {
    id: 4,
    image: united3,
    name: "Finance Website",
    category: "JAVASCRIPT",
    technologies: "React/Django",

    model: {
      image1: united2,
      image2: united3,
      image3: united4,
      name: "Finance Website",
      work: "gulmiunited has classic navbar, It has informational header as needed. Users can upload their urgent news on popups, uploads reports, notices and share news and notices even in the slider.",
      desc: "This website build using react on front end and django on backend. It is beautiful website with easy and smooth navigations.",
      visit: "https://gulmiunitedsaccos.com.np",
    },
  },

  {
    id: 5,
    image: bichardhara1,
    name: "Media Website",
    category: "PYTHON/DJANGO",
    technologies: "rect/django",

    model: {
      image1: bichardhara2,
      image2: bichardhara3,
      name: "News Website",
      work: "In this website, user can easily upload the news according to the categories defined, Using the easy and smooth backend admin can handle (edit/delete/create) the content",
      desc: "Visit this smooth, responsive and beautiful news website, Designed is done focusing on reader, so you can read content and navigate easily.",
      visit: "https://www.bichardhara.com",
    },
  },
  {
    id: 6,
    image: cocktail,
    name: "Drinks Recipe Website",
    category: "PYTHON/DJANGO",
    technologies: "React/Django",

    model: {
      image1: cocktail1,
      image2: cocktail2,
      image3: cocktail3,
      name: "Drinks Recipe Website",
      work: "This website provides a collection of recipes that can be used for making drinks. Recipe websites typically include a search function that allows users to search for specific recipes or to filter recipes by ingredient, cuisine type.",
      desc: "This website provides a collection of recipes that can be used for making drinks. Recipe websites typically include a search function that allows users to search for specific recipes or to filter recipes by ingredient, cuisine type.",
      visit: "https://mydrinks101.netlify.app/",
    },
  },
  {
    id: 7,
    image: login3,
    name: "NextJS Authentication",
    category: "JAVASCRIPT",
    technologies: "NextJS/React",

    model: {
      image1: login2,
      image2: login1,
      image3: login4,
      name: "NextJS Authentication",
      work: "Easy and efficient way for handling login, registration in NextJS",
      desc: "User can login using goole, github, or  credentials",
      visit: "https://next-authentication.netlify.app/",
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
  {
    id: 1,
    icon: <FaFacebook />,
    link: "https://www.facebook.com/iammilankhati",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/milan-khati-376a59198/",
  },
  { id: 3, icon: <FaInstagram />, link: "https://www.instagram.com/ilan_kc/" },
  { id: 4, icon: <FaGithub />, link: "https://github.com/iammilankhati/" },
];
