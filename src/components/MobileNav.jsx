import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
const MobileNav = () => {
	const [isMobilNavOpen, setMobileNavOpen] = useState(false);

	// Defining position of Navbar during open and closed states
	const navDrawerVariants = {
		open: { y: 0 },
		closed: { y: "-100%" },
	};

	// Home link is always active
	const [active, setActive] = useState(1);

	const MobNavLinks = [
		{ id: 1, displayName: "Home", linkTo: "home" },
		{ id: 2, displayName: "Projects", linkTo: "projects" },
		{ id: 3, displayName: "Experience", linkTo: "experience" },
		{ id: 4, displayName: "About", linkTo: "about" },
	];
	return (
		<>
			{/* Mobile navigation component: Contains mobile navigation layout, animations, and scroll */}
			{isMobilNavOpen ? (
				<AnimatePresence mode="wait">
					<motion.div className="flex items-center justify-center h-[2rem]">
						<motion.ul
							className="w-2/3 h-fit fixed mx-auto top-0 z-20 overflow-hidden bg-white rounded-b-xl justify-around p-3 flex flex-col text-black items-center shadow-2xl shadow-black"
							initial="closed"
							animate="open"
							exit="closed"
							variants={navDrawerVariants}
							transition={{
								type: "spring",
								stiffness: "100",
								damping: "20",
								duration: 1,
							}}
						>
							<li
								className="my-2 bg-gray-200 w-[7rem] rounded-xl cursor-pointer transition-colors ease-in-out duration-300 hover:bg-slate-300 flex flex-row justify-center p-2"
								onClick={() => setMobileNavOpen(false)}
							>
								<MdClose className="" size={20} color="rgb(67 56 202)" />
							</li>
							{MobNavLinks.map(({ id, linkTo, displayName }) => (
								<li key={id}>
									<Link
										to={linkTo}
										spy={true}
										smooth={true}
										duration={100}
										offset={-20}
										className={`relative cursor-pointer inline-flex items-center justify-center px-10 py-4 overflow-hidden  font-medium tracking-tighter text-black rounded-lg group ${
											active === id
												? "bg-indigo-400 rounded-full scale-90 transition-all ease-in-out text-white duration-400"
												: ""
										}`}
										onClick={() => (setMobileNavOpen(false), setActive(id))}
									>
										<span className="relative">{displayName}</span>
									</Link>
								</li>
							))}
							<div className="flex items-center justify-center text-lg px-10 mt-5 font-bold text-indigo-700">
								ansh.
							</div>
						</motion.ul>
					</motion.div>
				</AnimatePresence>
			) : (
				<>
					<AnimatePresence mode="wait">
						<motion.div
							id="mobile-nav"
							className="sticky z-10 w-full flex flex-row justify-center top-0"
						>
							<motion.div
								initial="closed"
								animate="open"
								exit="closed"
								variants={navDrawerVariants}
								transition={{
									type: "spring",
									stiffness: "200",
									damping: "30",
									duration: 1,
								}}
								className="flex justify-center text-lg w-2/6 cursor-pointer h-[2rem] bg-white font-bold rounded-full shadow-xl shadow-black"
								style={{ borderRadius: "100% 0% 50% 50% / 0% 0% 100% 100% " }}
								onClick={() => setMobileNavOpen(true)}
							>
								<HiMenuAlt2 className="mt-1" size={25} />
							</motion.div>
						</motion.div>
					</AnimatePresence>
				</>
			)}
		</>
	);
};

export default MobileNav;
