export interface Social {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export const socials: Social[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pratham-soni-23248a387/",
    icon: "🔗",
    color: "text-blue-700"
  },
  {
    name: "GitHub",
    url: "https://github.com/PrathamSoni09",
    icon: "🐈‍⬛",
    color: "text-gray-900"
  },
  // {
  //   name: "Email",
  //   url: "mailto:your@email.com",
  //   icon: "✉️",
  //   color: "text-red-600"
  // },
    {
    name: "Snap AR",
    url: "https://snapchat.com/add/innvencible",
    icon: "👻",
    color: "text-yellow-600"
  }
];