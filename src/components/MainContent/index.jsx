import { AboutContainer } from '../AboutContainer';
import { TechnologiesContainer } from '../TechnologiesContainer';
import { ProjectsContainer } from '../ProjectsContainer';

import './style.sass'

export const MainContent = () => {


	return (
		<main id="main-content">
			<AboutContainer />

			<TechnologiesContainer />

			<ProjectsContainer />
		</main>
	);

};
