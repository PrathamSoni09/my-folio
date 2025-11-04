export interface Skill {
  name: string;
  icon: string;
  progress: number; // 0 to 100
  category: 'code' | 'design' | 'video' | 'soft' | '3D' | 'AR';
}

export const skills: Skill[] = [
  {
    name: "JavaScript",
    icon: "💻",
    progress: 90,
    category: "code"
  },
  {
    name: "Photoshop",
    icon: "🖌️",
    progress: 95,
    category: "design"
  },
  {
    name: "Illustrator",
    icon: "🎨",
    progress: 95,
    category: "design"
  },
  {
    name: "After Effects",
    icon: "🎬",
    progress: 75,
    category: "video"
  },
  {
    name: "Premiere Pro",
    icon: "🎥",
    progress: 80,
    category: "video"
  },
  {
    name: "Blender",
    icon: "🕹️",
    progress: 85,
    category: "3D"
  },
  {
    name: "Lens Studio",
    icon: "👓",
    progress: 100,
    category: "AR"
  },
  {
    name: "Teamwork",
    icon: "🤝",
    progress: 75,
    category: "soft"
  }
];
