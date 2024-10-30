function Searchbar() {
	const [search, setSearch] = useState("");
	const datafilter = data.filter((item) =>
		item.name.toLowerCase().includes(search.toLowerCase()),
	);
	return (
		<input
			type="text"
			id="Searchbar"
			placeholder="Search Shoes"
			value={search}
			onChange={(event) => setSearch(event.target.value)}
		/>
	);
}

export default Searchbar;
