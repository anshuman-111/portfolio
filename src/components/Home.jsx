import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Experience from "./Experience";
import { motion } from "framer-motion";
const Home = () => {
	const [loading, setLoading] = useState(true);
	const [removeLoader, setRemoveLoader] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	setTimeout(() => {
		setRemoveLoader(true);
	}, 2000);
	return (
		<div className="mx-auto">
			<motion.div
				initial={{ opacity: 1, z: 50 }}
				animate={
					loading ? { opacity: 1, zIndex: 50 } : { opacity: 0, zIndex: -50 }
				}
				transition={
					loading
						? {}
						: {
								type: "spring",
								bounce: 3,
								repeat: 0,
								damping: 20,
								stiffness: 50,
						  }
				}
				className={
					removeLoader
						? "hidden"
						: "w-screen opacity-100 z-50 h-screen absolute bg-black flex flex-auto justify-center items-center"
				}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					width="224px"
					height="224px"
					viewBox="0 0 100 100"
					preserveAspectRatio="xMidYMid"
				>
					<path
						fill="none"
						stroke="#ffffff"
						strokeWidth="8"
						strokeDasharray="42.76482137044271 42.76482137044271"
						d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
						strokeLinecap="round"
						style={{ transform: "scale(0.8)", transformOrigin: "50px 50px" }}
					>
						<animate
							attributeName="stroke-dashoffset"
							repeatCount="indefinite"
							dur="5.5555555555555545s"
							keyTimes="0;1"
							values="0;256.58892822265625"
						></animate>
					</path>
				</svg>
			</motion.div>
			<div className={loading ? "hidden" : "block"}>
				<Navbar />
				<Hero />
				<Projects />
				<Experience />
				<About />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
