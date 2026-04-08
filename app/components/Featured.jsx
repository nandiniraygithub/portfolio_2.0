"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code } from "lucide-react";

export function Featured() {
  const [hoveredDescription, setHoveredDescription] = React.useState(null);

  const projects = [
    {
      id: 1,
      title: "chat Application",
      description:
        "A real-time chat application with authentication, private messaging, and socket-based communication.",
      image: "/project_image/chat.png",
      tech: [
        "React.js",
        "Framer Motion",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "JWT Authentication",
      ],
      live: "https://chatting-app-3-0.onrender.com/login",
      github: "https://github.com/nandiniraygithub/chatting_app_3.0",
    },

    {
      id: 2,
      title: "AI Math Calculator",
      description:
        "An AI-powered math calculator that solves problems from images using a vision-language model. Built with Next.js frontend and Node.js backend.",
      image: "/project_image/cal-ai.png",
      tech: ["Next.js", "TypeScript", "Node.js", "Express", "AI Model"],
      live: null,
      githubFrontend: "https://github.com/nandiniraygithub/Frontend_AI",
      githubBackend: "https://github.com/nandiniraygithub/Backend_cal",
      demo: "https://www.linkedin.com/posts/nandini-ray16_ai-geminiai-javascript-activity-7313292765319073793-TOfJ",
    },
{
  id: 3,
  title: "Newzenit Landing Page",
  description:
    "Designed and developed a responsive landing page for a company website, focusing on modern UI/UX, performance, and clean component-based architecture using React.",
  image: "/project_image/landing.png",
  tech: ["React.js", "Tailwind CSS", "JavaScript"],
  live: "https://newzenit.com/",
  github: "https://github.com/nandiniraygithub/newzen-It-"
},

   {
  id: 4,
  title: "Drag & Drop Game",
  description:
    "An interactive drag-and-drop game built using JavaScript, focusing on smooth UI interactions and user engagement. Designed with responsive layout and real-time visual feedback.",
  image:
    "/project_image/drag_drop.png",
  tech: ["HTML", "CSS", "JavaScript"],
  live: "https://667efb81dd2cea2f7f860530--dainty-blini-374f8b.netlify.app/",
  github: "https://github.com/nandiniraygithub/Dragging_game"
}
  ];

  return (
    <section id="works" className="w-full min-h-screen py-20 bg-[#f1f1f1] text-black rounded-tr-3xl rounded-tl-3xl">
      <div className="px-5 sm:px-10 md:px-20">
        <h1 className="text-[10vw] font-bold uppercase tracking-tighter leading-none mb-10 border-b border-zinc-300 pb-10">
          Featured Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 relative">

          {projects.map((project) => (
            <div key={project.id} className="relative group">
              
              {/* Title */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="uppercase font-medium text-sm">
                  {project.title}
                </span>
              </div>

              {/* Image Card */}
              <motion.div
                whileHover={{ scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-800"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center p-6 text-center">

                  <AnimatePresence mode="wait">
                    {hoveredDescription === project.id ? (
                      <motion.p
                        key="desc"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-white text-lg font-semibold mb-6"
                      >
                        {project.description}
                      </motion.p>
                    ) : (
                      <motion.h2
                        key="title"
                        className="text-[#ceea69] text-4xl font-bold mb-6"
                      >
                        {project.title}
                      </motion.h2>
                    )}
                  </AnimatePresence>

                  {/* LINKS */}
                  <div className="flex flex-wrap gap-3 justify-center">

                    {/* Live */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        onMouseEnter={() => setHoveredDescription(project.id)}
                        onMouseLeave={() => setHoveredDescription(null)}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    )}

                    {/* Single GitHub */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        onMouseEnter={() => setHoveredDescription(project.id)}
                        onMouseLeave={() => setHoveredDescription(null)}
                        className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center"
                      >
                        <Code size={20} />
                      </a>
                    )}

                    {/* Frontend Repo */}
                    {project.githubFrontend && (
                      <a
                        href={project.githubFrontend}
                        target="_blank"
                        className="px-3 py-1 bg-black text-white rounded-full text-xs"
                      >
                        Frontend
                      </a>
                    )}

                    {/* Backend Repo */}
                    {project.githubBackend && (
                      <a
                        href={project.githubBackend}
                        target="_blank"
                        className="px-3 py-1 bg-white text-black border rounded-full text-xs"
                      >
                        Backend
                      </a>
                    )}

                    {/* Demo */}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        className="px-3 py-1 bg-red-500 text-white rounded-full text-xs"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 border border-zinc-400 rounded-full text-xs uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        {/* <div className="flex justify-center mt-20">
          <button className="px-8 py-4 bg-black text-white rounded-full uppercase font-bold">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
}