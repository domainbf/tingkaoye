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
				<small>© 2024 <a href=" ">NIC.BN</a>. Domain name registrant <a href="https://domain.bf"></a></small>
				<p><a title="米表联盟[Domain.Cards]" href="https://domain.cards/"><img width="150" height="40" src="https://domain.cards/api/badge/domain.bf" alt="米表联盟 BadgeBar" /></a></p>
			</div>
		</footer>
	);
}
