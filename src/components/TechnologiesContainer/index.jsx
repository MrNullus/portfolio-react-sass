import {  
	DiHtml5,
	DiCss3,
	DiJsBadge,
	DiMysql,
	DiMsqlServer,
	DiReact
} from 'react-icons/di';

import './styles.sass';


const technologies = [
	{ id: "html", name: "HTML5", icon: <DiHtml5 />, desc: "Advanced Skills" },
	{ id: "css", name: "CSS3", icon: <DiCss3 />, desc: "Advanced Skills" },
	{ id: "js", name: "JavaScript", icon: <DiJsBadge />, desc: "Intermediate Skills" },
	{ id: "mySql", name: "mySql", icon: <DiMysql />, desc: "Intermediate Skills" },
	{ id: "sqlServer", name: "SQL Server", icon: <DiMsqlServer />, desc: "Basic Skills" },
	{ id: "react", name: "React", icon: <DiReact />, desc: "Intermediate Skills" },
];

export const TechnologiesContainer = () => {

	return (
		<section id="technologies-container">
			<h2>🛠 Technologies</h2>

			<div className="technologies-grid">
				{technologies.map(({ id, name, icon, desc }) => (
					<div 
						className="technology-card" 
						id={id} 
						key={id}
					>
						{icon}

						<div className="technology-info">
							<h3>{name}</h3>

							<p>
								{desc}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);

};	