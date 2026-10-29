export interface Link {
	label: string;
	href: string;
}

export interface Experience {
	role: string;
	org: string;
	orgLink: string;
	period: string;
	highlights: string[];
	related?: Link[];
}

export const stats = [];

export const experience: Experience[] = [
	{
		role: 'Simulation Programmer',
		org: 'Purdue Envision Center',
		orgLink: 'https://www.rcac.purdue.edu/envision',
		period: 'Mar 2026 - Present',
		highlights: [
			'Architected core Unity/C# systems for a fluid dynamics lab used by 400+ students',
			'Maintaining CollabXR, an open-source mixed reality classroom'
		],
	},
	{
		role: 'Independent Game Developer',
		org: 'Fallingdani Games',
		orgLink: 'https://fallingdani.itch.io/',
		period: 'Jul 2023 - Present',
		highlights: [
			'Shipped 11 Unity/C# games, both solo and with small teams',
			'Building a custom C++/OpenGL engine for upcoming projects'
		],
		related: [
			{ label: 'Echo Chamber', href: '/work/echo-chamber' },
			{ label: 'Swifter Wet Jet', href: '/work/swifter-wet-jet' },
		],
	},
	{
		role: 'Undergraduate Research Software Engineer',
		org: 'TDM x Caterpillar Inc.',
		orgLink: 'https://datamine.purdue.edu/caterpillar/',
		period: 'Aug 2025 - May 2026',
		highlights: [
			'Led a 5-person team to build an LLM-powered data analytics platform',
			'Ran weekly demos and coordinated with Caterpillar staff across biweekly sprints'
		],
	},
];

export const skills = [
	{ group: 'Graphics & engines', items: ['C++', 'C', 'GLSL', 'OpenGL', 'GLM', 'GLFW', 'CMake', 'Unity', 'C#'] },
	{ group: 'Data & backend', items: ['Python', 'SQL', 'R', 'Java', 'PostgreSQL', 'dbt', 'FastAPI', 'Streamlit', 'PyTorch', 'NumPy'] },
	{ group: 'Web & infra', items: ['HTML/CSS', 'Docker', 'AWS', 'GitHub Actions', 'Git', 'Ollama'] },
];

export const education = {
	school: 'Purdue University',
	schoolLink: 'https://www.purdue.edu/',
	degree: 'B.S. Computer Science & Data Science, Graphics',
	period: 'Aug 2024 - May 2028',
	details: ['3.83 GPA'],
	coursework: [
		'Fundamentals of Computer Graphics',
		'Operating Systems',
		'Systems Programming',
		'Numerical Methods',
		'Data Structures & Algorithms',
		'Linear Algebra',
		'Multivariable Calculus',
	],
};
