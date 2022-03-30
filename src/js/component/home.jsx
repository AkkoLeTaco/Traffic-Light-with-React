import React, { useState } from "react";

//create your first component
const Home = () => {
	const [Tlight, setLight] = useState("grey");
	return (
		<div className="lightBody">
			<div
				className={
					Tlight === "red" ? "light red selected" : "light red"
				}
				onClick={() => setLight("red")}></div>
			<div
				className={
					Tlight === "yellow"
						? "light yellow selected"
						: "light yellow"
				}
				onClick={() => setLight("yellow")}></div>
			<div
				className={
					Tlight === "green" ? "light green selected" : "light green"
				}
				onClick={() => setLight("green")}></div>
		</div>
	);
};

export default Home;
