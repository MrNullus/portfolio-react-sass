import Avatar from '../../img/user.png';

import { SocialNetworks } from '../SocialNetWorks'

import './style.sass';

export const Sidebar = () => {


	return (	
		<aside id="sidebar">
			<img src={Avatar} alt="Gustavo Henrique" />

			<p className="title">
				Desenvoledor Fron-End && Back-End
			</p>

			<SocialNetworks />

			<p>Informações de contato</p>

			<a href="#" className="btn" role="button" aria-label="download curriculum">
				Download do Curriculo
			</a>
		</aside>
	)
}
