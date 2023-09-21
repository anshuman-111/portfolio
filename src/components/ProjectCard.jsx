import React from "react";
import { motion } from "framer-motion";
const ProjectCard = ({
	id,
	title,
	projImg,
	github,
	projLink,
	popupDesc,
	techUsed,
}) => {
	return (
		<motion.div
			key={id}
			className="flex flex-col sm:flex-col md:flex-col xl:flex-row overflow-x-hidden mb-12 lg:flex-col mx-auto bg-white rounded-2xl last:lg:mb-24"
			initial={id === 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -90 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{
				type: "spring",
				duration: 1,
				bounce: 0.3,
				repeat: 0,
				damping: 13,
				stiffness: 50,
			}}
		>
			<img
				loading="lazy"
				src={projImg}
				alt={title}
				className="object-cover w-full xl:w-1/2 p-1 rounded-2xl"
			/>

			<div className="flex flex-col w-full p-5 mx-auto">
				<div className="font-lexend font-semibold text-lg tracking-tighter sm:text-2xl lg:text-2xl pb-5">
					{title}
				</div>
				<div className="font-lexend font-normal text-left tracking-wide text-sm sm:text-lg pb-5">
					{popupDesc}
				</div>
				<div className="flex flex-row pb-2">
					<a
						href={projLink}
						target="_blank"
						className="relative inline-block text-lg group mr-5"
					>
						<span className="relative z-10 block px-7 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
							<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
							<span className="absolute left-0 w-56 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
							<span className="relative text-[1rem] sm:text-md">Demo</span>
						</span>
					</a>
					<a
						href={github}
						target="_blank"
						className="relative inline-block text-lg group"
					>
						<span className="relative z-10 block px-7 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
							<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
							<span className="absolute left-0 w-56 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
							<span className="relative text-[1rem] sm:text-md">Code</span>
						</span>
					</a>
				</div>
				<div className="bg-slate-100 px-4 py-3 rounded-2xl flex flex-row flex-wrap justify-center gap-x-6 mt-6 gap-y-2 font-lexend text-indigo-700">
					{techUsed.map((val, idx) => (
						<div key={idx}>{val}.</div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
