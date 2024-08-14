import React from "react";

function SideBar(props) {
	const { title, date, desc, toggleSideBar, showSideBar } = props;

	return (
		<div
			className={`fixed inset-0 z-10 ${
				showSideBar ? "opacity-100" : "opacity-0 pointer-events-none"
			} transition-opacity duration-500`}
		>
			<div
				className={`absolute w-full h-full bg-black opacity-60`}
				onClick={toggleSideBar}
			></div>
			<div
				className={`absolute text-white overflow-y-scroll bg-black p-4 w-[80%] max-w-[60ch] h-full right-0 z-20 flex flex-col transform ${
					showSideBar ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-500`}
			>
				<h2 className="text-4xl font-[200] mb-4">{title}</h2>
				<div className="flex-1">
					<p className="text-2xl font-thin mb-4">{date}</p>
					<p className="text-xl font-[200]">{desc}</p>
				</div>
				<button
					className="fill-white max-w-[30px] hover:opacity-60 mt-4"
					onClick={toggleSideBar}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="30"
						width="30"
						viewBox="0 0 512 512"
					>
						<path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
					</svg>
				</button>
			</div>
		</div>
	);
}

export default SideBar;
