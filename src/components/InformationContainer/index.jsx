import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import './styles.sass';

const informations = [
	{ 
		id: 0, icon: <AiFillPhone id="phone-icon" />, 
		details: { title: "Phone", content: "55+ (11) 98597-6152" }
	},
	{ 
		id: 1, icon: <AiOutlineMail id="mail-icon" />, 
		details: { title: "Email", content: "gustavojs417@gmail.com" }
	},
	{ 
		id: 2, icon: <AiFillEnvironment id="pin-icon" />, 
		details: { title: "Location", content: "SP - SP, Brazil" }
	}
];

export const InformationContainer = () => {

	return (
		<section id="information">

			{informations.map(({ id, icon, details }) => (
				<div className="info-card" key={id}>
					{ icon }

					<div>
						<h3>{ details.title }</h3>
						<p>{ details.content }</p>
					</div>
				</div>
			))}

		</section>
	);

};
