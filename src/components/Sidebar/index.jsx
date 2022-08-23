import Avatar from '../../img/user.png';

import { SocialNetworks } from '../SocialNetworks'
import { InformationContainer } from '../InformationContainer';

import './style.sass';

export const Sidebar = () => {


	return (	
		<aside id="sidebar">
			<img src={Avatar} alt="Gustavo Henrique" />

			<p className="title">
				Desenvoledor Fron-End && Back-End
			</p>

			<SocialNetworks />

			<InformationContainer />

			<a href="#" className="btn" role="button" aria-label="download curriculum">
				Download do Curriculo
			</a>
		</aside>
	);

};
