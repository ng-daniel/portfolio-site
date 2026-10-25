export interface Link {
	label: string;
	href: string;
}

export interface Experience {
	role: string;
	org: string;
	orgLink: string;
	period: string;
	current: boolean;
	highlights: string[];
	tags: string[];
	related?: Link[];
}

export const stats = ['11 games shipped', 'top 3% GMTK 2025', 'Steam-published', '3.83 GPA'];

export const experience: Experience[] = [
	{
		role: 'Simulation Programmer',
		org: 'Purdue Envision Center',
		orgLink: 'https://www.rcac.purdue.edu/envision',
		period: 'Mar 2026 - Present',
		current: true,
		highlights: [
			'Architected core systems for a virtual fluid dynamics lab used by 400+ students',
			'Eliminated all OOM failures by designing a circular buffer memory allocator in C#',
			'Improved stability and publishing workflows for CollabXR, an open-source mixed-reality classroom',
		],
		tags: ['Unity', 'C#', 'AWS S3', 'Mixed reality'],
	},
	{
		role: 'Independent Game Developer',
		org: 'Fallingdani Games',
		orgLink: 'https://fallingdani.itch.io/',
		period: 'Jul 2023 - Present',
		current: true,
		highlights: [
			'Shipped 11 Unity/C# games, working across code, design, art, and audio',
			'Developing a custom game engine in C++ for upcoming unnanounced projects',
			'Reached 1,700+ views and 700+ plays on itch.io',
		],
		tags: ['Unity', 'C#', 'Game design'],
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
		current: false,
		highlights: [
			'Led a 5-person team building the backend for an AI data analysis platform',
			'Architected an MCP server exposing 5+ analysis and visualization tools',
			'Built an LLM orchestration pipeline capable of multi-step analysis',
		],
		tags: ['Python', 'FastAPI', 'AWS Bedrock', 'Docker', 'MCP'],
	},
];

export const skills = [
	{ group: 'Graphics & engines', items: ['C++', 'C', 'GLSL', 'OpenGL', 'GLM', 'GLFW', 'CMake', 'Unity', 'C#'] },
	{ group: 'Data & backend', items: ['Python', 'SQL', 'PostgreSQL', 'dbt', 'FastAPI', 'Streamlit', 'PyTorch', 'NumPy'] },
	{ group: 'Infra & tools', items: ['Docker', 'AWS', 'GitHub Actions', 'Git', 'Ollama'] },
	{ group: 'Also', items: ['Java', 'R', 'HTML/CSS'] },
];

export const education = {
	school: 'Purdue University',
	schoolLink: 'https://www.purdue.edu/',
	degree: 'B.S. Computer Science & Data Science, Graphics',
	period: 'Aug 2024 - May 2028',
	details: ['3.83 GPA'],
	coursework: [
		'Computer Graphics',
		'Operating Systems',
		'Systems Programming',
		'Numerical Methods',
		'Data Structures & Algorithms',
		'Linear Algebra',
		'Multivariable Calculus',
	],
};
