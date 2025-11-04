export interface Education {
  degree: string;
  school: string;
  location: string;
  duration: {
    start: string;
    end: string | 'Present';
  };
  description: string;
  achievements: string[];
  gpa?: string;
  courses?: string[];
  icon?: string;
}

export const education: Education[] = [
	{
		degree: "B.Tech CSE [AI & ML]",
		school: "AMTICS, UKA Tarsadia University",
		location: "Bardoli, Gujarat",
		duration: {
			start: "2024",
			end: "2028",
		},
		description:
			"Currently pursuing B.Tech with a focus on Computer Science and Engineering.",
		gpa: "9.37/10",
		courses: [
			"Data Structures and Algorithms",
			"Web Development",
			"Computer Graphics",
			"Artificial Intelligence",
		],
		icon: "🎓",
	},
	{
		degree: "Higher Secondary Education",
		school: "Sanskar Bharti Vidhyalaya",
		location: "Surat, Gujarat",
		duration: {
			start: "2020",
			end: "2024",
		},
		description:
			"Completed higher secondary education with focus on Physics, Chemistry, and Mathematics.",
		achievements: ["Code Fest"],
		icon: "📚",
	},
	{
		degree: "Secondary Education",
		school: "JHB Sardar School",
		location: "Surat, Gujarat",
		duration: {
			start: "2011",
			end: "2020",
		},
		description:
			"Completed secondary education with focus on basic learning fundamentals.",
		achievements: ["Best Student Award 2019"],
		icon: "📚",
	},
];