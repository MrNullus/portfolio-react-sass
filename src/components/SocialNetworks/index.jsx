import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

import './style.sass';

const listSocialNetworks = [
	{ name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/dev-punk-da-silva" },
	{ name: "github", icon: <FaGithub />, link: "https://www.github.com/MrNullus" },
	{ name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/punk.da.silva" },
	{ name: "twitter", icon: <FaTwitter />, link: "https://www.x.com/_MrNullus" }
];

export const SocialNetworks = () => {

	return (
		<section id="social-networks">
			{listSocialNetworks.map(( network ) => (
				<a 
					className="social-btn"
					href={network.link} 
					id={network.name} 
					key={network.name}
					target="_blank">
					{ network.icon }
				</a>
			))}
		</section>
	);

};
