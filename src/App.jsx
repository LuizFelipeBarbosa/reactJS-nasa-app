import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import LoadingPage from "./components/LoadingPage";
import Shuffle from "./components/Shuffle";

function App() {
	const [data, setData] = useState(null);
	const [showSideBar, setShowSideBar] = useState(false);

	function toggleSideBar() {
		setShowSideBar(!showSideBar);
	}

	useEffect(() => {
		async function fetchData() {
			const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
			const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

			const today = new Date().toDateString();
			const localKey = `nasaData-${today}`;

			if (localStorage.getItem(localKey)) {
				setData(JSON.parse(localStorage.getItem(localKey)));
				console.log("Fetched from Cache today");
				return;
			}
			localStorage.clear();

			try {
				const response = await fetch(url);
				const apiData = await response.json();
				localStorage.setItem(localKey, JSON.stringify(apiData));
				setData(apiData);
				console.log("Fetched from API today");
			} catch (error) {
				console.error(error.message);
			}
		}
		fetchData();
	}, []);

	async function randomizeImage() {
		setData(null);
		const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
		const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&count=1`;

		try {
			const response = await fetch(url);
			const apiData = await response.json();
			setData(apiData[0]);
			console.log(apiData);
		} catch (error) {
			console.error(error.message);
		}
	}

	return (
		<main className="flex h-screen">
			<Shuffle randomizeImage={randomizeImage}></Shuffle>
			{data ? (
				<Main img={data?.hdurl} title={data?.title} />
			) : (
				<LoadingPage />
			)}
			{data && (
				<SideBar
					title={data?.title}
					date={data?.date}
					desc={data?.explanation}
					toggleSideBar={toggleSideBar}
					showSideBar={showSideBar}
				/>
			)}
			{data && (
				<Footer
					title={data?.title}
					author={data?.copyright}
					toggleSideBar={toggleSideBar}
				></Footer>
			)}
		</main>
	);
}

export default App;
