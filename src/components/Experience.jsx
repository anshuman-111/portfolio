import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from "react-icons/md";
import { motion } from "framer-motion";
import { experienceData, skills } from "../info/data.cjs";
const Experience = () => {
	return (
		<div
			id="experience"
			className="h-full w-11/12 sm:w-3/4 mx-auto rounded-3xl shadow-black shadow-2xl overflow-hidden flex flex-col justify-center mt-32 backdrop-blur-3xl"
		>
			<motion.h1
				className="text-[3.4em] ml-3 text-white sm:text-[4em] md:text-[5.5em] lg:text-[7.6em] rounded-2xl font-lexend py-4 px-2 lg:p-10"
				initial={{ opacity: 0, y: 200 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					type: "spring",
					duration: 1,
					bounce: 0.3,
					repeat: 0,
					damping: 13,
					stiffness: 50,
				}}
			>
				experience.
			</motion.h1>
			<div className="">
				<VerticalTimeline>
					{experienceData.map((item) => {
						var isWork = item.type === "work";
						return (
							<VerticalTimelineElement
								key={item.id}
								date={item.start}
								dateClassName="date"
								iconStyle={
									isWork
										? { backgroundColor: "#C3DAC3" }
										: { backgroundColor: "#3c42fa" }
								}
								icon={isWork ? <MdWork /> : <MdSchool className="text-white" />}
							>
								<h1 className="vertical-timeline-element-title font-bold tracking-tight text-md sm:text-xl leading-snug">
									{item.title}
								</h1>
								<h5 className="vertical-timeline-element-subtitle text-sm sm:text-lg">
									{item.org}
								</h5>
								<p className="">{item.description}</p>
								<p className="">{item?.duration ?? item?.awards}</p>
							</VerticalTimelineElement>
						);
					})}
				</VerticalTimeline>
				<motion.h1
					className="text-[3em] text-white sm:text-[2em] md:text-[4em] ml-3 px-3 py-2 sm:p-10 lg:text-[7.6em]"
					initial={{ opacity: 0, y: 200 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						type: "spring",
						duration: 1,
						bounce: 0.3,
						repeat: 0,
						damping: 13,
						stiffness: 50,
					}}
				>
					skills.
				</motion.h1>
				<div className="flex flex-col">
					<motion.ul
						className="flex flex-row flex-wrap gap-4 sm:gap-8 justify-center text-[1.2em] sm:text-[2em] shadow-black shadow-2xl mx-auto  font-bold bg-white p-10 rounded-3xl text-indigo-800 text-center sm:text-left lg:text-left"
						initial={{ y: 200 }}
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
						{skills.map((item) => (
							<motion.li key={item.title}>
								<motion.p>{item.title}.</motion.p>
							</motion.li>
						))}
					</motion.ul>
				</div>
			</div>
		</div>
	);
};

export default Experience;
