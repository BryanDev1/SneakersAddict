import "./Listitems.css";

interface ListitemsProps {
	item: {
		id: number;
		name: string;
		category: string;
		brand: string;
		price: string;
		gender: string;
		img?: string;
	};
}

function Listitems({ item }: ListitemsProps) {
	return (
		<div className="Card">
			<h3>{item.name}</h3>
			<p>{item.brand}</p>
			<p>{item.price}</p>
			<img src={item.img} alt={item.name} />
			<button type="button" className="Button-card">
				Buy Now
			</button>
		</div>
	);
}

export default Listitems;
