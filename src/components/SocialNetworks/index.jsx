import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

import './style.sass';

const listSocialNetworks = [
	{ name: "linkedin", icon: <FaLinkedinIn /> },
	{ name: "github", icon: <FaGithub /> },
	{ name: "instagram", icon: <FaInstagram /> },
	{ name: "twitter", icon: <FaTwitter /> }
];

export const SocialNetworks = () => {

	return (
		<section id="social-networks">
			{listSocialNetworks.map(( network ) => (
				<a 
					className="social-btn"
					href="#" 
					id={network.name} 
					key={network.name}
					target="_blank">
					{ network.icon }
				</a>
			))}
		</section>
	);

};
