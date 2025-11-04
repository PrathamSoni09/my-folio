"use client";
import Image from "next/image";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { socials } from "@/data/socials";
import { education } from "@/data/education";
import { useState } from "react";

import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 font-sans">
			{/* Navbar */}
			<nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-b border-gray-200 dark:border-gray-700">
				<div className="section-container flex justify-between items-center py-4">
					<div className="text-2xl font-bold tracking-tight dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
						Pratham Soni
					</div>
					<div className="hidden md:flex space-x-8 text-lg">
						<a href="#about" className="nav-link">
							About
						</a>
						<a href="#education" className="nav-link">
							Education
						</a>
						<a href="#skills" className="nav-link">
							Skills
						</a>
						<a href="#projects" className="nav-link">
							Projects
						</a>
						<a href="#contact" className="nav-link">
							Contact
						</a>
					</div>
					<button className="md:hidden text-2xl dark:text-white">☰</button>
				</div>
			</nav>

			{/* Hero / About Section */}
			<section id="about" className="pt-28 pb-20">
				<div className="section-container">
					<div className="flex flex-col md:flex-row items-center justify-between gap-12">
						<div className="flex-1 space-y-6">
							<h1 className="heading-primary">
								Hi, I'm{" "}
								<span className="text-blue-600 dark:text-blue-400">
									Pratham Soni
								</span>
							</h1>
							<p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
								Designer | Developer | Editor
							</p>
							<p className="paragraph text-lg">
								Creative student developer in 2nd year B.Tech. Passionate about
								crafting digital experiences with expertise in JavaScript, Adobe
								Creative Suite, Blender, and AR development. Transforming ideas
								into immersive 3D models and engaging AR experiences.
							</p>
							<div className="flex gap-4 pt-4">
								<a href="/resume.pdf" download className="button-primary">
									Download Resume
								</a>
								<a
									href="#contact"
									className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 
                           rounded-lg transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 
                           hover:text-blue-600 dark:hover:text-blue-400"
								>
									Get in Touch
								</a>
							</div>
						</div>
						<div className="relative">
							<div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
							<div className="relative">
								<Image
									src="/images/pratham-soni.jpg"
									alt="pratham_img"
									width={300}
									height={300}
									className="rounded-full shadow-2xl border-4 border-white dark:border-gray-800"
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
				<div className="section-container">
					<h2 className="heading-secondary text-center mb-12">
						Professional Skills
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
						{skills.map((skill, index) => (
							<div key={index} className="card p-6 group">
								<div className="flex items-center gap-4 mb-3">
									<span className="text-3xl group-hover:scale-110 transition-transform">
										{skill.icon}
									</span>
									<div className="flex-1">
										<h3 className="font-medium text-lg dark:text-white">
											{skill.name}
										</h3>
										<div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full mt-2 overflow-hidden">
											<div
												className="h-full bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-1000 ease-out animate-[slide-right_1.5s_ease-out_forwards]"
												style={{
													width: `${skill.progress}%`,
												}}
											/>
										</div>
									</div>
									<span className="text-sm font-medium text-gray-600 dark:text-gray-300">
										{skill.progress}%
									</span>
								</div>
								<div className="text-sm text-gray-500 dark:text-gray-400">
									Category: {skill.category}
								</div>
							</div>
						))}
					</div>
				</div>
				<style jsx>{`
					@keyframes slideRight {
						from {
							transform: translateX(-100%);
						}
						to {
							transform: translateX(0);
						}
					}
				`}</style>
			</section>

			{/* Education Section */}
			<section id="education" className="py-20 bg-gray-50 dark:bg-gray-900/50">
				<div className="section-container">
					<h2 className="heading-secondary text-center mb-4">
						Educational Journey
					</h2>
					<p className="paragraph text-center mb-12 max-w-2xl mx-auto">
						My academic background and achievements that shape my professional
						growth.
					</p>
					<div className="space-y-8 max-w-4xl mx-auto">
						{education.map((edu, index) => (
							<div key={index} className="card group">
								<div className="flex items-start gap-4">
									<div className="text-4xl">{edu.icon}</div>
									<div className="flex-1">
										<h3 className="text-xl font-bold text-gray-900 dark:text-white">
											{edu.degree}
										</h3>
										<p className="text-blue-600 dark:text-blue-400 font-medium">
											{edu.school}
										</p>
										<p className="text-gray-600 dark:text-gray-400">
											{edu.location}
										</p>
										<p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
											{edu.duration.start} - {edu.duration.end}
										</p>
										<p className="mt-4 text-gray-700 dark:text-gray-300">
											{edu.description}
										</p>
										{edu.gpa && (
											<p className="mt-2 text-green-600 dark:text-green-400 font-medium">
												GPA: {edu.gpa}
											</p>
										)}
										{edu.achievements && (
											<div className="mt-4">
												<h4 className="font-medium text-gray-900 dark:text-white mb-2">
													Achievements
												</h4>
												<ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
													{edu.achievements.map((achievement, idx) => (
														<li key={idx}>{achievement}</li>
													))}
												</ul>
											</div>
										)}
										{edu.courses && (
											<div className="mt-4">
												<h4 className="font-medium text-gray-900 dark:text-white mb-2">
													Key Courses
												</h4>
												<div className="flex flex-wrap gap-2">
													{edu.courses.map((course, idx) => (
														<span
															key={idx}
															className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-1 rounded"
														>
															{course}
														</span>
													))}
												</div>
											</div>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="py-20">
				<div className="section-container">
					<h2 className="heading-secondary text-center mb-4">
						Featured Projects
					</h2>
					<p className="paragraph text-center mb-12 max-w-2xl mx-auto">
						Explore my latest work in AR development, 3D modeling, and creative
						design.
					</p>
					<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<div
								key={index}
								className="card group hover:translate-y-[-8px] transition-all duration-300"
							>
								<div className="relative overflow-hidden rounded mb-4">
									<Image
										src={project.image}
										alt={project.title}
										width={400}
										height={200}
										className="rounded transform group-hover:scale-105 transition-transform duration-300"
									/>
									{project.inProgress && (
										<div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
											In Progress
										</div>
									)}
								</div>
								<h3 className="font-semibold text-lg mb-2 dark:text-white">
									{project.title}
									{project.featured && (
										<span className="ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded">
											Featured
										</span>
									)}
								</h3>
								<p className="mb-4 text-gray-600 dark:text-gray-300 flex-grow">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag, tagIndex) => (
										<span
											key={tagIndex}
											className={`${
												tag.color || "bg-blue-100 text-blue-800"
											} text-xs px-2 py-1 rounded`}
										>
											{tag.name}
										</span>
									))}
								</div>
								<div className="flex flex-wrap gap-4 mt-auto">
									{project.links.map((link, linkIndex) => (
										<a
											key={linkIndex}
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-1 text-sm font-medium transition-colors"
											style={{
												color:
													link.type === "github"
														? "#4b5563"
														: link.type === "demo" || link.type === "live"
														? "#059669"
														: link.type === "behance"
														? "#1769ff"
														: link.type === "youtube"
														? "#ff0000"
														: "#4b5563",
											}}
										>
											<span>{link.icon}</span>
											<span>
												{link.label ||
													link.type.charAt(0).toUpperCase() +
														link.type.slice(1)}
											</span>
											<span className="text-xs">↗</span>
										</a>
									))}
								</div>
								{project.completionDate && (
									<div className="text-xs text-gray-500 dark:text-gray-400 mt-4">
										Completed:{" "}
										{new Date(project.completionDate).toLocaleDateString(
											"en-US",
											{ month: "long", year: "numeric" }
										)}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="py-20 bg-white dark:bg-gray-800 transition-colors"
			>
				<div className="section-container">
					<h2 className="heading-secondary text-center mb-4">Get in Touch</h2>
					<p className="paragraph text-center mb-12 max-w-2xl mx-auto">
						Have a project in mind or want to collaborate? I'd love to hear from
						you!
					</p>
					<div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
						{/* Contact Form */}
						<div className="flex-1">
							<form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
								<div className="relative">
									<input
										type="text"
										placeholder="Name"
										className="input-field"
									/>
									<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
										👤
									</div>
								</div>
								<div className="relative">
									<input
										type="email"
										placeholder="Email"
										className="input-field"
									/>
									<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
										✉️
									</div>
								</div>
								<div className="relative">
									<textarea
										placeholder="Message"
										rows={6}
										className="input-field resize-none"
									/>
								</div>
								<button type="submit" className="button-primary w-full">
									Send Message
								</button>
							</form>
						</div>

						{/* Contact Info */}
						<div className="flex-1 lg:pl-12 lg:border-l border-gray-200 dark:border-gray-700">
							<div className="space-y-8">
								<div>
									<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
										Contact Information
									</h3>
									<div className="space-y-4">
										<div className="flex items-center gap-4">
											<div className="text-2xl text-blue-600 dark:text-blue-400">
												📍
											</div>
											<div>
												<p className="font-medium text-gray-900 dark:text-white">
													Location
												</p>
												<p className="text-gray-600 dark:text-gray-400">
													Surat, Gujarat
												</p>
											</div>
										</div>
										<div className="flex items-center gap-4">
											<div className="text-2xl text-blue-600 dark:text-blue-400">
												📧
											</div>
											<div>
												<p className="font-medium text-gray-900 dark:text-white">
													Email
												</p>
												<a
													href="mailto:your.email@example.com"
													className="text-blue-600 dark:text-blue-400 hover:underline"
												>
													pratham09soni09@gmail.com@gmail.com
												</a>
											</div>
										</div>
										<div className="flex items-center gap-4">
											<div className="text-2xl text-blue-600 dark:text-blue-400">
												⏰
											</div>
											<div>
												<p className="font-medium text-gray-900 dark:text-white">
													Availability
												</p>
												<p className="text-gray-600 dark:text-gray-400">
													Monday - Friday, 7:00 PM - 10:00 PM
												</p>
											</div>
										</div>
									</div>
								</div>

								<div>
									<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
										Connect with Me
									</h3>
									<div className="flex gap-4">
										{socials.map((social, index) => (
											<a
												key={index}
												href={social.url}
												target="_blank"
												rel="noopener"
												className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
											>
												<span className="text-2xl">{social.icon}</span>
												<span className="font-medium text-gray-900 dark:text-white">
													{social.name}
												</span>
											</a>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="w-full py-6 text-center text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 mt-8 transition-colors">
				<div className="mb-2">
					&copy; {new Date().getFullYear()} Pratham Soni
				</div>
				<div className="flex justify-center gap-4">
					{socials.map((social, index) => (
						<a
							key={index}
							href={social.url}
							target="_blank"
							rel="noopener"
							className={`hover:${social.color} dark:hover:opacity-80 transition-colors`}
						>
							{social.name}
						</a>
					))}
				</div>
			</footer>
			<ThemeToggle />
		</main>
	);
}
