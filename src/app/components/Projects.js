import React from "react";
import "../styles/projects.css";

// Atualize os links dos repositórios conforme necessário
const projects = [
  {
    title: "Base Bot Whatsapp OpenWa",
    subtitle: "GitHub",
    link: "https://github.com/DarkBBR/Base-Bot-OpenWa",
  },
  {
    title: "My Messages Socket.IO",
    subtitle: "GitHub",
    link: "https://github.com/DarkBBR/My-Messages",
  },
  {
    title: "Server On NodeJS",
    subtitle: "GitHub",
    link: "https://github.com/DarkBBR/ServerOnNodeJs",
  },
  {
    title: "Discord Bot Slash V14 JS",
    subtitle: "GitHub",
    link: "https://github.com/DarkBBR/Bot-Discord-SlashCommands-V14",
  },
  {
    title: "Python Exel Automate Base",
    subtitle: "GitHub",
    link: "https://github.com/DarkBBR/Python_Exel_Automate_Base",
  },
];

const Card = ({ title, subtitle, link }) => (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="container group"
      >
  <div class="grid-container">
    <div class="container">
        <div className="tracker" />
        <div id="card">
          <div className="card-content">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
            <p id="prompt">Clique para ver no GitHub</p>
            <div className="glowing-elements">
              <div className="glow-1"></div>
              <div className="glow-2"></div>
              <div className="glow-3"></div>
            </div>
            <div className="card-particles">
              {[...Array(6)].map((_, index) => (
                <span key={index}></span>
              ))}
            </div>
          </div>
        </div>
    </div>
  </div>
      </a>
);

export default function ProjectsSection() {
  return (
    <div className="flex flex-col items-center p-8">
      {/* Título com gradiente */}
      <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text mb-8">
        PROJETOS
      </h1>

      {/* Seção dos cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
