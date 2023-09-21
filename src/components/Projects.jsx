import { motion } from "framer-motion";
import { ProjectData } from "../info/data.cjs";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	return (
		<>
			<motion.div
				id="projects"
				className="backdrop-blur-3xl rounded-3xl w-11/12 sm:w-3/4 shadow-black shadow-2xl h-full mx-auto mt-24 sm:mt-24 -z-10 px-2"
			>
				<motion.div className="w-full h-full">
					<motion.h1
						className="text-[3em] text-white sm:text-[5em] md:text-[6em] lg:text-[7.6em] rounded-2xl font-lexend py-4 px-2 lg:p-10"
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
						projects.
					</motion.h1>

					<motion.div className="flex flex-col w-full sm:w-5/6 h-full gap-3 mx-auto justify-center items-center">
						{ProjectData.map(
							({
								id,
								title,
								projImg,
								github,
								projLink,
								popupDesc,
								techUsed,
							}) => (
								<ProjectCard
									key={id}
									id={id}
									title={title}
									projImg={projImg}
									github={github}
									projLink={projLink}
									popupDesc={popupDesc}
									techUsed={techUsed}
								/>
							),
						)}
					</motion.div>
				</motion.div>
			</motion.div>
		</>
	);
};

export default Projects;
