import {  
	DiHtml5,
	DiCss3,
	DiJsBadge,
	DiMysql,
	DiMsqlServer,
	DiReact,
	DiLaravel,
    DiGithub,
    DiRuby,
    DiPython,
    DiFirebase
} from 'react-icons/di';
import { FaPhp } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import './styles.sass';


const technologies = [
	{ id: "html", name: "HTML5", icon: <DiHtml5 />, desc: "Advanced Skills" },
	{ id: "css", name: "CSS3", icon: <DiCss3 />, desc: "Advanced Skills" },
	{ id: "js", name: "JavaScript", icon: <DiJsBadge />, desc: "Intermediate Skills" },
	{ id: "mySql", name: "mySql", icon: <DiMysql />, desc: "Intermediate Skills" },
	{ id: "sqlServer", name: "SQL Server", icon: <DiMsqlServer />, desc: "Basic Skills" },
	{ id: "react", name: "React", icon: <DiReact />, desc: "Intermediate Skills" },
	{ id: "php", name: "PHP", icon: <FaPhp />, desc: "Intermediate Skills" },
	{
		id: "python",
		name: "Python",
		icon: <DiPython />,
		desc: "Intermediate Skills", // Update description based on your skill level
	  },
	  {
		id: "tailwindcss",
		name: "Tailwind CSS",
		icon: <SiTailwindcss />,
		desc: "Intermediate Skills"
	  },
	  {
		id: "github",
		name: "GitHub",
		icon: <DiGithub />,
		desc: "Advanced Skills",
	  },
	  {
		id: "ruby",
		name: "Ruby",
		icon: <DiRuby />,
		desc: "Intermediate Skills", // Update description based on your skill level
	  },
	  {
		id: "figma",
		name: "Figma",
		icon: <FaFigma />,
		desc: "Intermediate Skills", // Update description based on your skill level
	  },
	  {
		id: "git",
		name: "Git",
		icon: <FaGitSquare />,
		desc: "Advanced Skills",
	  },
	  {
		id: "nextjs",
		name: "Next.js",
		icon: <TbBrandNextjs />,
		desc: "Beging Skills", // Update description based on your skill level
	  },  
	  {
		id: "express",
		name: "Express",
		icon: <SiExpress />,
		desc: "Intermediate Skills", // Update description based on your skill level
	  },
	  {
		id: "firebase",
		name: "Firebase",
		icon: <DiFirebase />,
		desc: "Intermediate Skills", // Update description based on your skill level
	  },
	  {
		id: "laravel",
		name: "Laravel",
		icon: <DiLaravel />,
		desc: "Intermediate Skills", // Update description based on your skill level
	  }
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