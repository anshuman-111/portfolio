import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-scroll";
import MobileNav from "./MobileNav";
const Navbar = () => {
	const [active, setActive] = useState("home");
	const [canChangeNavStyle, setChangeNavStyle] = useState(true);

	const navLinks = [
		{ id: 1, displayName: "Home", linkTo: "home" },
		{ id: 2, displayName: "Projects", linkTo: "projects" },
		{ id: 3, displayName: "ansh." },
		{ id: 4, displayName: "Experience", linkTo: "experience" },
		{ id: 5, displayName: "About", linkTo: "about" },
	];

	useEffect(() => {
		window.addEventListener("navbar-clicked", () => setChangeNavStyle(false));
		window.addEventListener("scrollend", () => setChangeNavStyle(true));
	}, [active]);
	return (
		<>
			<MobileNav />
			<div
				id="main-nav"
				className="sticky z-10 w-full flex flex-row justify-center top-0"
			>
				<ul className="w-fit h-16 bg-white rounded-lg justify-around mt-2 p-3 flex flex-row text-black items-center shadow-2xl shadow-black">
					{navLinks.map(({ id, displayName, linkTo }) =>
						id === 3 ? (
							<div
								key={id}
								className="flex items-center justify-center text-lg px-10 w-[5rem] h-[3rem] bg-indigo-700 font-bold  text-white"
								style={{ borderRadius: "20% 20% 20% 0% / 30% 57% 50% 70%" }}
							>
								{displayName}
							</div>
						) : (
							<li key={id}>
								<Link
									to={linkTo}
									spy={true}
									smooth={true}
									offset={-170}
									duration={10}
									onSetActive={() =>
										canChangeNavStyle ? setActive(linkTo) : {}
									}
									className={`relative inline-flex items-center justify-center px-10 py-4 overflow-hidden cursor-pointer font-medium tracking-tighter text-black rounded-lg group ${
										active === linkTo
											? "bg-indigo-400 rounded-full scale-90 transition-all ease-in-out text-white duration-400"
											: ""
									}`}
									onClick={() => (
										setActive(linkTo),
										window.dispatchEvent(new Event("navbar-clicked"))
									)}
								>
									<span className="relative">{displayName}</span>
								</Link>
							</li>
						),
					)}
				</ul>
			</div>
		</>
	);
};

export default Navbar;
