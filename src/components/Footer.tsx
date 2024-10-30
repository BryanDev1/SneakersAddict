import "./Footer.css";

function Footer() {
	return (
		<div>
			<footer className="footer-container">
				<div className="footer-content">
					<h2>SneakersAddict</h2>
					<p>123 Rue des Sneakers, Paris, France</p>
					<p>Téléphone : +33 1 23 45 67 89</p>

					<a href="/privacy-policy">Politique de confidentialité</a>
					<a href="/terms-and-conditions">Conditions générales de vente</a>
					<a href="/legal-notices">Mentions légales</a>
					<a href="/about">À propos de nous</a>
					<a href="/contact">Contact</a>
					<a href="/faq">FAQ</a>

					<a
						href="https://www.facebook.com/sneakersaddict"
						target="_blank"
						rel="noopener noreferrer"
					>
						Facebook
					</a>
					<a
						href="https://www.instagram.com/sneakersaddict"
						target="_blank"
						rel="noopener noreferrer"
					>
						Instagram
					</a>
				</div>

				<div className="footer-bottom">
					<p>© 2024 SneakersAddict. Tous droits réservés.</p>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
