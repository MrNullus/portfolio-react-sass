import Avatar from '../../img/user.png';

import { SocialNetworks } from '../SocialNetworks'
import { InformationContainer } from '../InformationContainer';

import './style.sass';

export const Sidebar = () => {


	return (	
		<aside id="sidebar">
			<img src={Avatar} alt="Gustavo Henrique" />

			<p className="title">
				FullStack Developer<br/><br/>
				Nickname: <span className="nick">Mr. Nullus</span>
			</p>

			<SocialNetworks />

			<InformationContainer />

			<a 
				href="../../../Curriculo - Gustavo Henrique.pdf" 
				className="btn" 
				download={true}
				role="button" 
				aria-label="download curriculum">
				Download Curriculum
			</a>
		</aside>
	);

};
