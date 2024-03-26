import React from 'react';
import Link from 'next/link';

export const Contact = ({ title, description, buttons }) => {
	return (
		<div id="contact" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					<p>{description}</p>
					<div className="">
						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<Link key={index} href={value.link}>
									<a className="btn btn-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
								:
								<Link key={index} href={value.link}>
									<a className="btn btn-outline-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export const Footer = () => {
	return (
		<footer className="bg-secondary text-center py-2 px-5">
			<div className="container text-muted">
				<small>&copy; 2024 {" "}
					<Link href="https://nic.bn">
						<a>NIC.BN</a>
					</Link>
					. Domain name display page {" "}
					<Link href="https://domain.bf">
						<a></a>
					</Link>
					{" "}
					<a title="米表联盟[Domain.Cards]" href="https://domain.cards/">
						<img width="150" height="40" src="https://domain.cards/api/badge/[domain]" alt="米表联盟 BadgeBar"/>
					</a>
				</small>
			</div>
		</footer>
	);
}
