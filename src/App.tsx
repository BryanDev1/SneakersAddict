import "./App.css";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Listitems from "./components/Listitems";
import NavBar from "./components/NavBar";
import PromoBanner from "./components/PromoBanner";
import "./components/reset.css";
import data from "./data/datasneaks.json";
import { useState } from "react";

function App() {
	const [search, setSearch] = useState("");
	const datafilter = data.filter((item) =>
		item.name.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<div className="Bigboss">
			<NavBar />
			<Header />
			<PromoBanner />
			<Category />
			<section className="Searchbar">
				<input
					type="text"
					placeholder="Search Shoes"
					value={search}
					onChange={(event) => setSearch(event.target.value)}
				/>
			</section>
			<section id="Listitem-container">
				{datafilter.map((item) => (
					<Listitems item={item} key={item.id} />
				))}
			</section>
			<Footer />
		</div>
	);
}

export default App;
