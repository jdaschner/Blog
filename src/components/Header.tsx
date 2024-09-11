import React from "react";

const Header: React.FC = () => {
	return (
		<header className="bg-base-100 shadow-md">
			<nav className="navbar px-4">
				<div className="flex-1">
					<a className="text-2xl font-bold">Apricot Code</a>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal p-0">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/about">About</a>
						</li>
						<li>
							<a href="/contact">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
