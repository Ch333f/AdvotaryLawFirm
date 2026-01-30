// import modules
import { Routes, Route } from "react-router-dom";

// import Png from "./components/png.jsx";
// import Svg from "./components/svg.jsx";

import ContactUs from "./components/main/pages/ContactUs.jsx";
import Home from "./components/main/pages/Home.jsx";


function App() {
	return (
		<Routes>
			<Route
				element={<Home />} 
			>
				<Route path="/" />
				<Route path="/home" />
			</Route>
			<Route 
				path="/contact-us" 
				element={<ContactUs />} 
			/>

			{/* <Route 
				path="/png" 
				element={<Png />} 
			/> */}
			{/* <Route 
				path="/svg" 
				element={<Svg />}
			/> */}
		</Routes>
	);
};


export default App;
