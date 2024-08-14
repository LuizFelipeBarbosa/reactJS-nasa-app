import React from "react";

function Main(props) {
	const { img, title } = props;

	return (
		<div className="w-full h-full flex items-center justify-center">
			<img
				className="object-cover object-center w-full h-full"
				src={img}
				alt={title}
			/>
		</div>
	);
}

export default Main;
