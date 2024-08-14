import React from "react";

function Footer(props) {
	const { title, author, toggleSideBar } = props;

	return (
		<footer className="fixed bottom-0 left-0 p-8 flex justify-between text-white w-full">
			<div className="absolute inset-0 z-[-1] bg-gradient-to-t from-black to-transparent"></div>
			<div className="flex-auto ">
				{author && (
					<p className="text-xl font-[200]">
						{"Photographer:"}
						{author}
					</p>
				)}
				<h2 className="text-4xl font-bold">{title}</h2>
			</div>
			<button
				className="fill-white hover:opacity-60"
				onClick={toggleSideBar}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="30"
					width="30"
					viewBox="0 0 512 512"
				>
					<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
				</svg>
			</button>
		</footer>
	);
}

export default Footer;
