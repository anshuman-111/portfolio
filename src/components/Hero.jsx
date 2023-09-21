import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { SocialLinks } from "../info/data.cjs";
const Hero = () => {
	return (
		<>
			<div
				id="home"
				className=" w-11/12 mt-16 sm:mt-24 pb-10 sm:w-3/4 min-h-fit mx-auto"
			>
				<div className="flex flex-row justify-center h-3/4 mx-auto sm:px-20 mt-14 backdrop-blur-xl shadow-black shadow-2xl rounded-3xl">
					<div className="flex flex-col  justify-center h-full w-11/12 sm:w-3/4  text-white">
						<p className="text-center w-full text-2xl md:text-4xl pt-5 sm:text-2xl sm:pt-4 leading-tight tracking-widest font-thin">
							Hi! I am Ansh,
						</p>
						<p className="text-center w-full text-[2.3em] sm:text-[2em] md:text-[3em] lg:text-[3em] xl:text-[4.7em] leading-tight tracking-tighter">
							Software Developer.
						</p>
						<p className="text-center text-md sm:text-xl w-full mt-5 leading-tight tracking-tight p-4 bg-white text-gray-800 rounded-xl">
							I create full-stack applications for the web using Python, ReactJS
							and NodeJS.
						</p>
						<div className="flex flex-row justify-center  mb-10">
							<motion.button
								className="mt-10 mr-6"
								whilehover={{ scale: 1.02 }}
							>
								<a
									href="#projects"
									className="relative inline-block text-lg group"
								>
									<span className="relative z-10 block px-7 py-4 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
										<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
										<span className="absolute left-0 w-56 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-indigo-400 group-hover:-rotate-180 ease"></span>
										<span className="relative">Projects</span>
									</span>
									<span
										className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-indigo-300 rounded-lg group-hover:mb-0 group-hover:mr-0"
										data-rounded="rounded-lg"
									></span>
								</a>
							</motion.button>
							<motion.button
								className="mt-10"
								whilehover={{ scale: 1.06 }}
								whiletap={{ scale: 0.9 }}
							>
								<a
									href="#experience"
									className="relative inline-block text-lg group"
								>
									<span className="relative z-10 block px-7 py-4 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
										<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
										<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-indigo-400 group-hover:-rotate-180 ease"></span>
										<span className="relative">Experience</span>
									</span>
									<span
										className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-indigo-300 rounded-lg group-hover:mb-0 group-hover:mr-0"
										data-rounded="rounded-lg"
									></span>
								</a>
							</motion.button>
						</div>
						<div className="flex flex-row justify-center gap-6 w-full mb-10 mx-auto items-center rounded-3xl h-1/6">
							<a
								href={SocialLinks.github}
								target="_blank"
								className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
							>
								<span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
								<span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
								<span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
								<span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
								<span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
								<span className="relative transition-colors duration-100 delay-100 group-hover:text-white ease">
									<p className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex flex-col items-center">
										<FaGithub size={30} />
									</p>
									{/* <p className="relative transition-colors duration-300 delay-200 group-hover:text-white ease text-center">
										Github
									</p> */}
								</span>
							</a>
							<a
								href={SocialLinks.linkedIn}
								target="_blank"
								className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
							>
								<span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
								<span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
								<span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
								<span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
								<span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
								<span className="relative transition-colors duration-100 delay-100 group-hover:text-white ease">
									<p className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex flex-col items-center">
										<FaLinkedin size={30} />
									</p>
								</span>
							</a>
							<a
								href={SocialLinks.email}
								target="_blank"
								className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
							>
								<span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
								<span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
								<span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
								<span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
								<span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
								<span className="relative transition-colors duration-100 delay-100 group-hover:text-white ease">
									<p className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex flex-col items-center">
										<MdEmail size={30} />
									</p>
								</span>
							</a>
							<a
								href={SocialLinks.resume}
								target="_blank"
								className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
							>
								<span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
								<span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
								<span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
								<span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
								<span className="absolute inset-0 w-full h-full duration-100 delay-100 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
								<p className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex flex-col items-center">
									<HiDocumentText size={30} />
								</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
