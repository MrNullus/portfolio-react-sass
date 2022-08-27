import Avatar from '../../img/user.png';

import { SocialNetworks } from '../SocialNetworks'
import { InformationContainer } from '../InformationContainer';

import './style.sass';

export const Sidebar = () => {


	return (	
		<aside id="sidebar">
			<img src={Avatar} alt="Gustavo Henrique" />

			<p className="title">
				Dev Fron-End && Back-End <br/><br/>
				Nickname: <span className="nick">Ms. Nullus</span>
			</p>

			<SocialNetworks />

			<InformationContainer />

			<a 
				href="../../../public/curriculum.pdf" 
				download 
				className="btn" 
				role="button" 
				aria-label="download curriculum">
				Download Curriculum
			</a>
		</aside>
	);

};
