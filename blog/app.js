let Header = () => {
	return <h1>This Is My Personal Blog</h1>;
};
let Article = () => {
	return (
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
			ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
			nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
			anim id est laborum.
		</p>
	);
};
let Footer = () => {
	return <footer>&copy; All Rights Reserved</footer>;
};

let Blog = () => {
	return (
		<div>
			<Header />
			<Article />
			<Footer />
		</div>
	);
};

ReactDOM.render(<Blog />, document.getElementById("root"));
