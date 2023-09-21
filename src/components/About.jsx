import React from "react";
import { motion } from "framer-motion";
import { AboutDataPara1, AboutDataPara2, websiteSpecs } from "../info/data.cjs";
const About = () => {
	return (
		<div
			id="about"
			className="h-full w-11/12 sm:w-3/4 mx-auto rounded-3xl shadow-black shadow-2xl overflow-hidden flex flex-col justify-center mt-48 backdrop-blur-3xl"
		>
			<motion.p
				className="text-[3em] ml-3 text-white sm:text-[5em] md:text-[6em] lg:text-[7.6em] rounded-2xl font-lexend py-4 px-2 lg:p-10"
				initial={{ y: 200 }}
				whileInView={{ y: 0 }}
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
				about.
			</motion.p>

			<motion.div
				className="text-md sm:text-xl text-left bg-white w-full p-4 sm:p-10 rounded-3xl tracking-tighter"
				initial={{ y: 100 }}
				whileInView={{ y: 0 }}
				transition={{
					type: "spring",
					duration: 1,
					bounce: 0.3,
					repeat: 0,
					damping: 13,
					stiffness: 50,
				}}
			>
				{AboutDataPara1}
				<br />
				<br />
				<br />
				{AboutDataPara2}
				<br />
				<br />
				<br />
				<p className="text-center">{websiteSpecs}</p>
			</motion.div>
		</div>
	);
};

export default About;
