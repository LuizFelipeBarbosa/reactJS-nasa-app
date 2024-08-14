import React from "react";

function Main(props) {
	const { img, title } = props;

	return (
		<div className="w-full h-full overflow-hidden">
			<img className="object-cover w-full h-full" src={img} alt={title} />
		</div>
	);
}

export default Main;
