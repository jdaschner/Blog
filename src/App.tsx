import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

const App: React.FC = () => {
	return (
		<Layout>
			<Home />
		</Layout>
	);
};

export default App;
