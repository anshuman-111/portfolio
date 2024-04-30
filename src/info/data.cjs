import {} from 'react-icons/fa'
import musoImg from '../assets/muso/muso.png'
import centroImg from '../assets/centro/centro.png'
import kocoamaniaImg from '../assets/kocoamania/kocoamania.png'
import dataAggImg from '../assets/data_agg/data_agg.png'
import dataAggPdf from '../assets/data_agg/data_agg.pdf'
import resumePdf from '../assets/resume.pdf'

export const AboutDataPara1 = 'I am a highly motivated software developer with a passion for creating flexible, and scalable applications. I am a quick learner with a keen interest for new technologies and frameworks. I have worked as a front-end and back-end developer, contributing to the complete development cycle and collaborating closely with cross-functional teams to deliver seamless user experiences and robust solutions.'

export const AboutDataPara2 = ' When I am not coding, I enjoy playing drums, guitar, and producing music. Let\'s connect and build something amazing!'

export const websiteSpecs = 'This website was built using ReactJS, HTML, Tailwind CSS, and Framer Motion.'

export const ProjectData = [{
  id: 1,
  title: "Rental Application For Musical Instruments",
  github: "https://github.com/anshuman-111/muso",
  projLink: "https://muso-frontend.onrender.com/",
  projImg: musoImg,
  popupDesc:
    "A Rental platform for posting and renting-out music instrument rentals. Users can sign-up or login and can Post, Browse, and Search for rentals. An interactive dashboard allows users to track their rentals. Users upload before and after pictures that matched automatically using Compture Vision Algorithms.",
  techUsed: ['Python', 'Django', 'OpenCV', 'ReactJS', 'AWS Lambda', 'AWS S3', 'PostgreSQL', 'HTML',  'Tailwind CSS']
},

{
  id: 2,
  title: "Layout Generator for a concert",
  github: "https://github.com/anshuman-111/centro",
  projLink: "https://centrocbd.netlify.app",
  projImg: centroImg,
  popupDesc:
    "The Layout generator is a ReactJS and Vanilla JS based project that generates a layout for a concert based on the bookings. This is being actively used at Centro CBD Restaurant and Function Centre, Wollongong. The objective was to save time by automating the layout creation and reduce margin of error.",
  techUsed: ['ReactJS', 'DataForgeJS', 'HTML', 'Tailwind CSS']
},
{
  id: 3,
  title: "Website for a Bakery in India",
  github: "https://github.com/anshuman-111/km-frontend",
  projLink: "https://www.kocoamania.com/",
  projImg: kocoamaniaImg,
  popupDesc:
    "Website for Kocoa Mania, a bakery in India, built using modern web development technologies like ReactJS and StrapiCMS. The client needed to update the website frequently and add approximately 600 images. The website was integrated with a headless CMS connected to Cloudinary CDN and was deployed on a VPS Server using Nginx.",
    techUsed: ['ReactJS', 'StrapiCMS', 'HTML', 'CSS', 'Javascript', 'PostgreSQL']
},
{
  id: 4,
  title: "Data Scraper and Aggregator",
  github: "https://github.com/anshuman-111/flatmates-data",
  projLink: dataAggPdf,
  projImg: dataAggImg,
  popupDesc:
    "Data Scraper and aggregator based on data scraped from Flatmates.com.au. The objective of this project was to narrow down on search time by finding properties based on aggregates like Minimum rent with bills included, Properties available in the next 10 days, etc.",
  techUsed: ['Python', 'Pandas', 'BeautifulSoup']
},]
export const experienceData = [
  {
  id: 1,
  type: 'work',
  title: 'Software Engineer',
  org: 'Fair Share Group - Melbourne',
  duration: '6 months (Present)'
},
{
  id: 2,
  type: 'work',
  title: 'Software Engineer',
  org: 'AML Cloud - Melbourne',
  duration: '5 months'
},
{
  id: 3,
  type: 'work',
  title: 'Software Developer',
  org: 'Fair Share Group - Melbourne',
  duration: '4 months'
},
{
  id: 4,
  type: 'education',
  title: 'Master of Computer Science',
  org: 'University of Wollongong',
  description: 'Software Engineering Major',
  awards: 'Distinction Average Award',
},
{
  id: 5,
  type: 'education',
  org: 'Institute of Leadership Entreprenuership and Development',
  title: 'Bacelor of Business Administration',
  description: 'Relevant coursework includes Mathematics, Statistics, Information technology, and Business communication',
  awards: 'Distinction Average Award',
}
]
export const contactData = []
export const SocialLinks = {
  github: 'https://github.com/anshuman-111',
  linkedIn: 'https://www.linkedin.com/in/anshumangupta1997/',
  resume: resumePdf,
  email: 'mailto:anshuman11197@gmail.com'
}

export const skills = [{title: 'Python'}, {title: 'Django'}, {title: 'Flask'}, {title: 'ReactJS'}, {title: 'NodeJS'}, {title: 'AWS'}, {title: 'Docker'}, {title: 'MySQL'}, {title: 'Firebase'}, {title: 'HTML'},{title: 'Tailwind'}, {title: 'CSS'}]