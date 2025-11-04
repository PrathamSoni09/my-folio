export interface Project {
  title: string;
  description: string;
  image: string;
  links: {
    type: 'github' | 'demo' | 'behance' | 'youtube' | 'live' | 'download' | 'custom';
    url: string;
    label?: string;
    icon?: string;
  }[];
  tags: {
    name: string;
    color?: string; // Tailwind color class
  }[];
  featured?: boolean;
  inProgress?: boolean;
  completionDate?: string;
  category: 'design' | 'development' | '3d' | 'animation' | 'other';
}

export const projects: Project[] = [
  {
    title: "AR Game in Lens Studio",
    description: "Created an immersive AR game experience using Lens Studio that engages users in a fun and interactive environment.",
    image: "/images/project1.png",
    category: "AR Experience",
    links: [
      {
        type: "live",
        url: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=219af069730f45d1b121a1e267aea8be&metadata=01",
        label: "Try Lens",
        icon: "👓"
      }
    ],
    tags: [
      { name: "AR", color: "bg-purple-100 text-purple-800" },
      { name: "Lens Studio", color: "bg-yellow-100 text-yellow-800" },
      { name: "Game Development", color: "bg-green-100 text-green-800" }
    ],
    featured: true,
    completionDate: "2025-04"
  },
  {
    title: "3D Car Model",
    description: "Designed and developed a 3D car model featuring low poly geometry, perfect for game objects.",
    image: "/images/project2.jpg",
    category: "3D",
    links: [
      {
        type: "demo",
        url: "/car3d.fbx",
        label: "download model",
        icon: "🎨"
      }
    ],
    tags: [
      { name: "3D Modeling", color: "bg-blue-100 text-blue-800" },
      { name: "Blender", color: "bg-orange-100 text-orange-800" },
      { name: "Animation", color: "bg-pink-100 text-pink-800" }
    ],
    inProgress: false,
    completionDate: "2025-06"
  },
  {
    title: "VFX Showreel",
    description: "A compilation of my best visual effects work from various projects, showcasing Motion Tracking systems and dynamic simulations.",
    image: "/images/project3.png",
    category: "animation",
    links: [
      {
        type: "youtube",
        url: "https://www.instagram.com/tv/CckjQLqjSVA/",
        label: "Watch Showreel",
        icon: "🎬"
      }
    ],
    tags: [
      { name: "After Effects", color: "bg-indigo-100 text-indigo-800" },
      { name: "VFX", color: "bg-red-100 text-red-800" },
      { name: "Blender", color: "bg-teal-100 text-teal-800" }
    ],
    completionDate: "2022-04"
  },//1.07756 m 1.76019 m -0.18 m
  {
    title: "3D Stall Design",
    description: "A 3D model of an exhibition stall designed for a business event, featuring attractive design and branding.",
    image: "/images/project4.jpg",
    category: "3D",
    links: [
      {
        type: "",
        url: "",
        label: "",
        icon: ""
      }
    ],
    tags: [
      { name: "Real World Application", color: "bg-red-100 text-red-800" },
      { name: "Blender", color: "bg-teal-100 text-teal-800" }
    ],
    completionDate: "2023-09"
  }
];