import { FaHtml5, FaNodeJs, FaPython, FaCogs } from "react-icons/fa";
import "../styles/skills.css";

export default function Skills() {
  return (
    <div className="skills-container py-8 px-4 sm:px-6 md:px-8 lg:px-12 bg-black rounded-lg shadow-md mx-4 sm:mx-6 md:mx-12 border border-zinc-700">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">Minhas Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-white">
        <SkillCard 
          title="Front-End" 
          icon={<FaHtml5 className="text-orange-500" />} 
          skills={["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"]} 
        />
        <SkillCard 
          title="Back-End" 
          icon={<FaNodeJs className="text-green-500" />} 
          skills={["Node.js", "Express.js", "Firebase", "MongoDB", "PostgreSQL"]} 
        />
        <SkillCard 
          title="Data Science" 
          icon={<FaPython className="text-yellow-400" />} 
          skills={["Python", "Pandas", "NumPy", "Matplotlib", "Machine Learning"]} 
        />
        <SkillCard 
          title="Software Eng." 
          icon={<FaCogs className="text-gray-400" />} 
          skills={["C", "C++", "Java", "Git & GitHub", "Agile Methodologies"]} 
        />
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mt-12 mb-6">Formação Técnica</h2>

      <h3 className="text-lg sm:text-xl font-semibold text-blue-400 text-center mb-4">Etec Dr. Domingos Minicucci Filho</h3>
      <div className="text-white text-sm sm:text-base space-y-2">
        <p className="mb-2"><strong>Áreas de Estudo:</strong></p>
        <p className="ml-4 leading-relaxed">
          Eletrônica Digital, Sistemas Embarcados, Automação Industrial, Microcontroladores (Arduino, PIC), Robótica, Sensores e Atuadores, Controle PID, PLC (Controladores Lógicos Programáveis), Circuitos Elétricos
        </p>
        
        <p className="mt-4 mb-2"><strong>Softwares e Programação:</strong></p>
        <p className="ml-4 leading-relaxed">
          SolidWorks / AutoCAD, Matlab / Simulink, Internet das Coisas (IoT), Programação em C/C++, Machine Learning Aplicado, Manutenção de Sistemas Mecatrônicos
        </p>
      </div>
    </div>
  );
}

function SkillCard({ title, icon, skills }) {
  return (
    <div className="skill-card bg-zinc-800 p-4 sm:p-5 rounded-lg shadow-sm border border-zinc-700">
      <h3 className="text-xl sm:text-2xl font-semibold flex items-center mb-3 space-x-2">
        {icon}
        <span>{title}</span>
      </h3>
      <ul className="space-y-1">
        {skills.map((skill, index) => (
          <li key={index} className="text-sm sm:text-base flex items-center space-x-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
