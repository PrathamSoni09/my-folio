# Next.js Professional Portfolio Setup Guide

## Project Overview
This guide helps you build a scalable, professional portfolio for Alex Marker using Next.js. The structure and instructions ensure easy addition/removal of content and assets.

---

## 1. Project Structure

```
project-folio/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── about/
│   │   └── page.tsx
│   ├── skills/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── components/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── SkillCard.tsx
│       ├── ProjectCard.tsx
│       └── ContactForm.tsx
├── public/
│   ├── images/
│   │   ├── alex-marker.jpg
│   │   ├── project1.png
│   │   ├── project2.png
│   │   └── ...
│   └── resume.pdf
├── package.json
├── README.md
└── ...
```

---

## 2. Scalability Instructions

- **Pages:** Each section (Home, About, Skills, Projects, Contact) is a separate folder in `app/`. To add/remove a page, create/delete the folder and its `page.tsx`.
- **Components:** Reusable UI elements (cards, navbar, footer, forms) are in `app/components/`. Add new components here for new features.
- **Images:** Store all images in `public/images/`. Add new images for skills/projects here and reference them in your code.
- **Projects/Skills:** Use arrays/objects in a config file (e.g., `data/projects.ts`, `data/skills.ts`) to manage content. Map over these in your page components for easy updates.
- **Resume:** Place your PDF in `public/resume.pdf`. Update the file to change your résumé.

---

## 3. Adding/Removing Content

- **Skills:**
  - Edit `data/skills.ts` to add/remove skills.
  - Each skill can have a name, icon, and (optionally) a progress value.
- **Projects:**
  - Edit `data/projects.ts` to add/remove projects.
  - Each project should have a title, description, image, and GitHub link.
- **Social Links:**
  - Edit `data/socials.ts` for LinkedIn, GitHub, Email, etc.
  - Footer and Contact page will map over these links.

---

## 4. Responsive Design

- Use CSS modules or Tailwind CSS for styling.
- Test on desktop, tablet, and mobile.
- Use flexbox/grid for layouts.
- Use scalable units (rem, %, vw/vh) for sizing.

---

## 5. Navigation & Interactivity

- Navbar links to all pages.
- Use Next.js `<Link>` for smooth client-side navigation.
- Add hover effects with CSS transitions.
- Use simple animations (e.g., fade-in, scale) for cards/buttons.

---

## 6. Footer & Socials

- Footer is a reusable component.
- Social/contact links are mapped from `data/socials.ts`.
- Add hover effects for icons.

---

## 7. Resume Download

- Add a button in About or Navbar to download/view `public/resume.pdf`.
- Use `<a href="/resume.pdf" download>` for download functionality.

---

## 8. Images

- Place profile photo as `public/images/alex-marker.jpg`.
- Add project images as `public/images/project1.png`, etc.
- Use optimized Next.js `<Image>` component for images.

---

## 9. Adding New Features

- Create new folders in `app/` for new pages.
- Add new components in `app/components/`.
- Update config/data files for new content.

---

## 10. Example Data File (`data/projects.ts`)

```ts
export const projects = [
  {
    title: "AR Game in Lens Studio",
    description: "Created an AR game experience using Lens Studio.",
    image: "/images/project1.png",
    github: "https://github.com/yourusername/ar-game-lensstudio"
  },
  {
    title: "3D Car Model",
    description: "Designed and developed a 3D car model for a game/stall.",
    image: "/images/project2.png",
    github: "https://github.com/yourusername/3d-car-model"
  },
  // Add more projects here
];
```

---

## 11. Getting Started

1. Clone the repo and run `npm install`.
2. Add your images to `public/images/`.
3. Add your résumé to `public/resume.pdf`.
4. Edit data files for skills, projects, socials.
5. Run `npm run dev` to start the local server.
6. Edit page and component files to customize content/design.

---

## 12. Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/) (optional for styling)
- [React Icons](https://react-icons.github.io/react-icons/) (for skill/social icons)

---

## 13. Example Image Usage

```tsx
import Image from "next/image";
<Image src="/images/alex-marker.jpg" alt="Alex Marker" width={200} height={200} />
```

---

## 14. Maintenance & Scalability

- Keep data/config files organized for easy updates.
- Use reusable components for consistency.
- Test responsiveness after every major change.
- Document new features/components in this README.

---

## 15. Contact & Socials

- Add your LinkedIn, GitHub, and Email in `data/socials.ts`.
- Use icons for clickable links in footer/contact page.

---

## 16. Customization

- Change color theme in `globals.css` or Tailwind config.
- Update fonts via Google Fonts or CSS.
- Add/remove sections by editing page/component files.

---

## 17. Example Footer Socials

```ts
export const socials = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: "AiFillLinkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "AiFillGithub"
  },
  {
    name: "Email",
    url: "mailto:your@email.com",
    icon: "AiOutlineMail"
  }
];
```

---

## 18. Adding Images

- Place new images in `public/images/`.
- Reference them in data files or components.
- Use descriptive filenames for easy management.

---

## 19. Resume Button Example

```tsx
<a href="/resume.pdf" download className="btn">Download Résumé</a>
```

---

## 20. Final Notes

- Keep your portfolio updated with new skills/projects.
- Use modular design for easy scalability.
- Document all changes for future reference.

---

## 21. Sample About Page Content

- Name: Alex Marker
- Photo: `/images/alex-marker.jpg`
- Bio: "Student, designer, editor, developer. 2nd year B.Tech. Experience in .js, psd, illustrator, ae, pr, blender, lens studio. Created AR experiences, developed 3D models for games, awards, stalls, etc."
- Tagline: "Designing the Future, One Pixel at a Time."

---

## 22. How to Add/Remove Sections

- To add a new section, create a new folder in `app/` and add a `page.tsx`.
- To remove a section, delete the folder and update the navbar/footer links.

---

## 23. How to Add/Remove Skills/Projects

- Edit the respective data files and the UI will update automatically.

---

## 24. How to Add/Remove Social Links

- Edit `data/socials.ts` and update the footer/contact page.

---

## 25. How to Update Resume

- Replace `public/resume.pdf` with your new résumé.

---

## 26. How to Add Images

- Place images in `public/images/` and reference them in your data/components.

---

## 27. How to Add Animations

- Use CSS transitions or libraries like Framer Motion for smooth effects.

---

## 28. How to Change Theme/Fonts

- Edit `globals.css` or Tailwind config for colors/fonts.

---

## 29. How to Test Responsiveness

- Use browser dev tools to test on different devices.

---

## 30. How to Deploy

- Use Vercel or Netlify for easy Next.js deployment.

---

## 31. Maintenance Checklist

- [ ] Update skills/projects/socials regularly
- [ ] Test responsiveness after changes
- [ ] Keep README updated
- [ ] Document new features/components

---

## 32. Example Images

- `public/images/alex-marker.jpg` (profile photo)
- `public/images/project1.png` (project image)
- `public/images/project2.png` (project image)

---

## 33. Example Resume

- `public/resume.pdf` (your résumé)

---

## 34. Questions?

- Refer to this README for instructions.
- For advanced customization, consult Next.js and React docs.

---

**Good luck building your professional portfolio!**
