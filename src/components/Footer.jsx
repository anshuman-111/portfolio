import React from "react";
import { motion } from "framer-motion";
const Footer = () => {
	return (
		<motion.footer
			className="w-full h-[8rem] mt-32 bg-black border-t-[1em] border-white text-center text-lg text-white pt-10"
			initial={{
				borderRadius: "78% 80% 0% 0% / 99% 78% 0% 0%",
			}}
			whileInView={{
				borderRadius: "60% 60% 0% 0% / 40% 40% 0% 70%",
			}}
			transition={{
				type: "spring",
				duration: 4,
				bounce: 3,
				repeat: 0,
				damping: 2,
				stiffness: 5,
			}}
		>
			All Rights Reserved. &copy; 2023 Anshuman Gupta
		</motion.footer>
	);
};
//

export default Footer;
