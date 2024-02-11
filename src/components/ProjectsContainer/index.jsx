import { ProjectArticle } from '../ArticleProject';
import './style.sass';


const projects = [
	{
		title: "My First Web App",
		description: "A simple website I built to learn HTML, CSS, and JavaScript.",
		link: "https://example.com/my-first-app",
	},
	{
		title: "Personal Portfolio",
		description: "This portfolio website showcases my skills and experience.",
		link: "https://example.com/portfolio",
	},
];

export const ProjectsContainer = () => {
	return (
		<section id="projects-container">
			<h2>Projects</h2>

			<p>
				Get to know my projects that I have done, implementing all the technologies that I master and that I am learning.
			</p>

			{projects.map((project) => (
				<>
				<p>
					<ProjectArticle 
					   key={project.title} 
					   {...project}
					/>
				</p>
				<br />
				<hr />
				<br />
				</>
			))}

			<p>
				Made with 💜 by Gustavo Henrique | Mr Nullus
			</p>
		</section>
	);
};
